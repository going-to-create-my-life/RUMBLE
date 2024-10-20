# RUMBLE!

RUMBLE! is a ethereum-based one-on-one competitive programming platform where players compete each other for ELO points or Ethereum stakes. We see it as a whole new domain in the competitive programming scene where it shifts the focus from dedicated contests to one-on-one face-offs making it even more quick and thrilling. It also creates a base for Web3 organizations to contribute in popularizing competitive programming. Rumble solves the problem of making competitive programming more engaging, rewarding, and interactive by transforming it into a real-time, game-like experience.

## Objectives for RUMBLE! as ideated and tried

We majorly built RUMBLE! in Typescript, React, Tailwind, Flask and SQLite
so we had the following plans made up:
(Many points were not implemented due time constraints)
1. A Login Page and Google OAuth.
2. Connection to Metamask wallet.
3. Proper routing to the Dashboard.
4. Dashboard with ETH-Stake and Rated modes.
5. Problem Selection based on range of levels from Codeforces.
6. parsing random problem statement from id from codeforces api and bypassing 403 Requests for selecting markup.
7. Showing leetcode-like workspace to input test.
8. Setting up proper sockets for communication.
9. Using Rapid API for compiling code in our IDE also using Codeium Auto-complete.
10. Submitting into our dummy account in codeforces bypassing Cloudflare using selenium-base as it blocks several drivers and any User Agents as stated in codeforces.com/robots.txt just like vjudge.
11. Now using codeforces API to check status and verdict of our submission and updating in our frontend and database.
12. Doing appropriate calculations of ELO as in chesscom or ETH Stake distribution proving rating or ETH in respective accounts/wallets in MetaMask. 
13. Updating the game archive in the database.
14. Creating a well-detailed profile as shown in our Figma designs paperwork.
15. Proper stats in profile and invite system and setting up Notifications

