from flask import Flask, jsonify, request
import requests
import random
from bs4 import BeautifulSoup
from seleniumbase import Driver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Extra Headers to bypass Chrome Scrapping issue
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Ch-Ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Linux"',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
}

# Codeforces credentials
USERNAME = "whoami793389"
PASSWORD = "whoami:)"
COMPILER_RAPID_API = "c03a80d0f7msha9c281e0c8fca9bp1b3d4djsn54bb8eeb04c4"
CODE_PATH = r"C:\Users\User\OneDrive\Desktop\All files\yoyo-yoyo\src\api\solution.cpp"  # File Absolute path for the code you want to submit.

# Codeforces Base URLs
LOGIN_URL = "https://codeforces.com/enter"
PROBLEM_SUBMISSION_URL = "https://codeforces.com/problemset/submit"

app = Flask(__name__)

def print_to_selenium(link):

    driver = Driver(uc=True,headless=True)
    driver.get(link)

    html_content = driver.page_source

    soup = BeautifulSoup(html_content, 'html.parser')

    problem_statement_div = soup.find('div', class_='problemindexholder')

    if problem_statement_div:
        with open('problem.html', 'w', encoding='utf-8') as new_file:
            new_file.write(str(problem_statement_div))  # Save as HTML
    else:
        print("Problem statement not found.")

    driver.quit()

def get_random_problem_by_rating(rating):
    response = requests.get('https://codeforces.com/api/problemset.problems', headers=headers)
    data = response.json()

    if data['status'] != 'OK':
        return None, "Error fetching data from Codeforces API"

    problems = data['result']['problems']

    problems_with_rating = [problem for problem in problems if 'rating' in problem and problem['rating'] == rating]

    if not problems_with_rating:
        return None, f"No problems found with rating {rating}."

    selected_problem = random.choice(problems_with_rating)

    contest_id = selected_problem['contestId']
    problem_index = selected_problem['index']
    problem_url = f"https://codeforces.com/contest/{contest_id}/problem/{problem_index}"

    return selected_problem, problem_url

def login(driver):
    # Open Codeforces login page
    driver.get(LOGIN_URL)
    
    # Enter username
    username_input = driver.find_element(By.ID, "handleOrEmail")
    username_input.send_keys(USERNAME)
    
    # Enter password
    password_input = driver.find_element(By.ID, "password")
    password_input.send_keys(PASSWORD)
    
    # Submit login form
    password_input.send_keys(Keys.RETURN)
    
    # Wait for login to complete
    time.sleep(5)
    
def submit_code(driver, problem_index, language,code_path):
    # Open the submission page
    driver.get(PROBLEM_SUBMISSION_URL)
    
    # Find the contest and problem index inputs
    problem_index_input = driver.find_element(By.NAME, "submittedProblemCode")
    problem_index_input.send_keys(problem_index)
    
    # Choose the programming language
    language_select = driver.find_element(By.NAME, "programTypeId")
    for option in language_select.find_elements(By.TAG_NAME, "option"):
        if option.get_attribute("value") == language:
            option.click()
            break
    
    # Upload the solution code
    code_input = driver.find_element(By.NAME, "sourceFile")
    code_input.send_keys(code_path)
    
    # Submit the form
    submit_button = driver.find_element(By.CSS_SELECTOR, "input.submit[type='submit']")
    submit_button.click()

@app.route('/random_problem', methods=['GET'])
def random_problem():
    level = request.args.get('level', default=1500, type=int)  # Default to 1500 if not specified
    problem, url = get_random_problem_by_rating(level)
    if problem is None:
        return jsonify({'error': url}), 500
    
    print_to_selenium(url)

    return jsonify({
        'name': problem['name'],
        'contestId': problem['contestId'],
        'index': problem['index'],
        'url': url,
    })
    
@app.route('/run', methods=['GET'])
def run():
    language = request.args.get('language', default=7, type=int)  # Language ID 54 is GNU G++17 7.3.0
    input_data = request.args.get('input', default='')
    url = "https://code-compiler.p.rapidapi.com/v2"

    # Open the file in read mode
    with open(CODE_PATH, 'r') as file:
        content = file.read()

    payload = {
        "LanguageChoice": language,
        "Program": content,
        "Input": input_data
    }
    headers = {
        "x-rapidapi-key": COMPILER_RAPID_API,
        "x-rapidapi-host": "code-compiler.p.rapidapi.com",
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    # Check if the request was successful
    if response.status_code == 200:
        result = response.json()
        if(result["Errors"]):
            return result["Errors"]
        else: return result["Result"]
    else:
        return f"Error: {response.status_code}, {response.text}"

@app.route('/submit', methods=['GET'])
def submit():
    problem_index = request.args.get('problem', default='1520A')
    language = request.args.get('language', default=54, type=int)  # Language ID 54 is GNU G++17 7.3.0
    driver = Driver(uc=True,headless=True)
    try:
        # Log in to Codeforces
        login(driver)
        # Submit the code
        submit_code(driver,problem_index,language,CODE_PATH)
        
    except Exception as e:
        print(f"An error occurred: {e}")
    
    finally:
        # Close the browser
        driver.quit()
    
    return f"Successfully submitted the code for problem {problem_index}"

if __name__ == '__main__':
    app.run(port=8000,debug=True)
