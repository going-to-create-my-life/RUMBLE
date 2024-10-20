import React, { useState, useEffect, useRef } from 'react';
import metaBoy from "./../../images/metaBoy.png";
import Login from '../Login';
import Cookies from 'js-cookie';
import { useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const IntroPage: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function
    // Function to get the token from query parameters
    useEffect(() => {
      const fetchData = async () => {
        try {
            const token = Cookies.get('jwt');
            const response = await fetch(`http://localhost:5000/authen?token=${token}`); // Replace with your URL
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const text = await response.text();
            if(text){
              console.log(text);
              if (text == "SAFE") navigate('/dashboard');
              else if (text == "WALLET") navigate('/home');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  // State to control login form visibility
  const [showLogin, setShowLogin] = useState<boolean>(false);

  // Ref to track the login form
  const loginRef = useRef<HTMLDivElement | null>(null);

  // Effect to hide login form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setShowLogin(false); // Hide the login form if clicked outside
      }
    };

    // Add event listener to detect clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginRef]);

  return (
    <div className="relative">
      <nav className="bg-[#D3D3D3] bg-opacity-5 z-10 fixed backdrop-blur w-full px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-500 md:order-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li className="md:px-8 md:py-2 text-indigo-500"><a href="#">Home</a></li>
              <li className="md:px-8 md:py-2 hover:text-indigo-400"><a href="#">About Us</a></li>
              <li className="md:px-8 md:py-2 hover:text-indigo-400"><a href="#">News</a></li>
              <li className="md:px-8 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2" onClick={() => setShowLogin(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed bg-custom-bg bg-cover bg-[100% 100%] bg-center h-screen flex w-full">
        <img src={metaBoy} alt="metaBoy" className="object-scale-down pb-[8%] pt-[6%] pl-[10%]" />
        <div className="font-lora text-white pt-[15%] pl-[10%] pr-[10%]">
          <span className="text-[40px]">Welcome to the</span>
          <br />
          <span className="italic text-[105px] leading-[65px] font-[900]">RUMBLE!</span>
          <br />
          <br />
          <span className="text-[21px] pr-[10%]">Race against peers in intense 1v1 battles and level up your competitive programming game. Compete against the best of the best to make it to the top!</span>
          <br />
          <div className="pt-[10%]">
            <button
              className="rounded-[30px] bg-gradient-to-r from-[#2B015A] to-[#FEB44B] text-[30px] w-[50%] font-galindo px-[10px] py-[10px]"
              onClick={() => setShowLogin(true)} // Show login form on click
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Login form */}
      {showLogin && (
        <div className="absolute z-10 px-[40%]" ref={loginRef}>
          <Login onClose={() => setShowLogin(false)} /> {/* Pass the onClose function */}
        </div>
      )}
    </div>
  );
};

export default IntroPage;
