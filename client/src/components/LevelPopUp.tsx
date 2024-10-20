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
  const levels = ['A', 'B', 'C', 'D'];

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setBetAmount(value);
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
                key={level}
                className="w-1/4 p-2 bg-purple-700 text-white text-center font-bold rounded mr-1 last:mr-0 cursor-pointer transition-colors hover:bg-purple-600 aspect-square flex items-center justify-center"
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

export default LevelPopUp;