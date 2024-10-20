import React, { useState } from 'react';
import home from "./../../images/home.png";
import rating from "./../../images/rating.png";
import history from "./../../images/history.png";
import notification from "./../../images/notification.png";
import standing from "./../../images/standing.png";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface LevelPopUpProps {
  onClose: () => void;
}

const LevelPopUp: React.FC<LevelPopUpProps> = ({ onClose }) => {
  const [betAmount, setBetAmount] = useState(1);
  const [mlevel, setmlevel] = useState('A');
  const levels = ['A', 'B', 'C', 'D'];
  const navigate = useNavigate();
  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setBetAmount(value);
    }
  };

  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  // Initialize web3 and MetaMask connection
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          setAccount(accounts[0]); // Set the user's account
        })
        .catch((err: Error) => {
          console.error('Error connecting to MetaMask:', err);
        });
    } else {
      console.error('MetaMask is not installed!');
    }
  }, []);

  // Function to request payment
  const requestPayment = async () => {
    if (!account || !web3) {
      console.error('Web3 or account not initialized');
      return;
    }
    const toAddress = '0xb4386b597dEcC967F630DDD18d9BF2c28239E93f';
    const amountToSend = web3.utils.toWei(betAmount, 'ether');
    try {
      await web3.eth.sendTransaction({
        from: account,
        to: toAddress,
        value: amountToSend,
      });
      console.log('Transaction successful');
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gray-200 px-4 py-2 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-semibold">Place Your Bet</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &#10005;
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
          {levels.map((level) => (
            <div
              key={level} onClick={()=> setmlevel(level)}
              className={`w-1/4 p-2 bg-purple-700 text-white text-center font-bold rounded mr-1 last:mr-0 cursor-pointer transition-colors hover:scale-125  aspect-square flex items-center justify-center${
                level == mlevel ? ' bg-red-700' : ''
              }`}
            >
              Level {level}
            </div>
          ))}
          </div>
          
          <div className="mb-4">
            <input
              type="range"
              min="1"
              max="10"
              value={betAmount}
              onChange={(e) => setBetAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">Place Bet:</span>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                max="10"
                value={betAmount}
                onChange={handleManualInput}
                className="w-16 px-2 py-1 border rounded mr-2 text-right"
              />
              <span className="text-gray-700 font-bold">ETH</span>
            </div>
          </div>
          
         
          <NavLink to="/loading" >
            <button className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Confirm
            </button>
        </NavLink>
        </div>
      </div>
    </div>
  );
};
// ()=> navigate(`/problem?level=${mlevel}&ether=${betAmount}`)
export default LevelPopUp;