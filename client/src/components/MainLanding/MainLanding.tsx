import sticker from "./../../images/sticker.png"
import React, { useState } from 'react';
import Web3 from 'web3';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
declare global {
  interface Window {
    ethereum: any;
  }
}
const MainLanding = () => {
  const location = useLocation();
  const navigate = useNavigate();
    // Function to get the token from query parameters
    const getTokenFromQuery = (urlSearchParams : string) => {
        const params = new URLSearchParams(urlSearchParams);
        return params.get('token'); // Change 'token' if your query parameter has a different name
    };

    useEffect(() => {
      console.log("DONEE1");
      const token = getTokenFromQuery(location.search);
      if (token) {
        console.log(token);
          // Set the token as a cookie
          Cookies.set('jwt', token, { expires: 7 }); // Expires in 7 days
          console.log('Token saved as cookie:', token);
      } else {
          console.log('No token found in URL');
      } 
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
              else if (text == "LOGIN") navigate('/');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [location.search]);

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const token = Cookies.get('jwt');
    if(account) window.location.href = `http://localhost:5000/add?x=${account}&token=${token}`;
  }, [account]);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
        // console.log("Connected account:", accounts[0]);

        // Optionally, use web3 for additional functionality
        const balance = await web3.eth.getBalance(accounts[0]);
        // console.log("Account balance:", web3.utils.fromWei(balance, 'ether'), 'ETH');
      } catch (error) {
        console.error("Connection to MetaMask failed:", error);
      }
    } else {
      alert('MetaMask not detected! Please install MetaMask to use this feature.');
    }};
  
    return (
      <main
        className="flex bg-custom2-bg justify-between items-center w-full h-[93vh] p-8 text-white bg-cover">
        {/* Left Content */}
        <div className="flex flex-col w-[40vw]">
          <h1 className="text-3xl leading-tight">
            Join with <span className="text-4xl font-bold block mt-2">METAMASK!</span>
          </h1>
          <p className="text-lg mt-4 w-[30vw] leading-relaxed">
            Download Browser extension of Metamask, then click below to open the metamask window and make the connection to play the game :)
          </p>
          <button onClick={connectMetaMask} className="bg-gradient-to-b from-purple-800 to-purple-900 text-white py-4 px-16 rounded-full shadow-lg mt-8 transition duration-300">
           {account ? `Connected: ${account}` : 'Connect to MetaMask'}
          </button>
        </div>
  
        {/* Right Content (Sticker Image) */}
        <div className="relative">
          <img src={sticker} alt="sticker" className="max-w-[40vw] h-auto" />
        </div>
      </main>
    );
  };
  
  export default MainLanding;
  