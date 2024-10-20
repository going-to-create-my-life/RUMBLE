import React, {useState} from 'react';
import home from "./../../images/home.png";
import rating from "./../../images/rating.png";
import history from "./../../images/history.png";
import notification from "./../../images/notification.png";
import standing from "./../../images/standing.png";
import { NavLink } from "react-router-dom";
import LevelPopUp from "./../LevelPopUp";
import PlayForFunPopUp from "./../PlayForFunPopUp";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Get the navigate function
    // Function to get the token from query parameters
    const getTokenFromQuery = (urlSearchParams : string) => {
        const params = new URLSearchParams(urlSearchParams);
        return params.get('token');
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
        console.log("DONEE2");
        try {
            const token = Cookies.get('jwt');
            const response = await fetch(`http://localhost:5000/authen?token=${token}`); // Replace with your URL
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const text = await response.text();
            if(text){
              console.log(text);
              if (text == "LOGIN") navigate('/');
              else if (text == "WALLET") navigate('/home');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [location.search]);

  const [showLevelPopup, setShowLevelPopup] = useState(false);
  const [showPlayForFunPopup, setShowPlayForFunPopup] = useState(false);

  const handleOpenLevelPopup = () => {
    setShowLevelPopup(true);
  };

  const handleCloseLevelPopup = () => {
    setShowLevelPopup(false);
  };

  const handleOpenPlayForFunPopup = () => {
    setShowPlayForFunPopup(true);
  };

  const handleClosePlayForFunPopup = () => {
    setShowPlayForFunPopup(false);
  };

  return (
    <div className="relative">
      {showLevelPopup && <LevelPopUp onClose={handleCloseLevelPopup} />}
      {showPlayForFunPopup && <PlayForFunPopUp onClose={handleClosePlayForFunPopup} />}
      <div className="absolute">
      <div className="flex min-h-screen bg-cover bg-center bg-custom2-bg">
      {/* Sidebar */}
      <div className="flex flex-col items-center justify-center mt-32 w-[5.5vw] space-y-4 pb-[10%] gap-[40px]">
        <NavLink to="/" className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img src={home} alt="Home" className="h-10" />
          <span className="text-xs text-white pt-[10px]">Home</span>
        </div>
        </NavLink>
            <div className="flex flex-col items-center">
          <img src={rating} alt="Rating" className="h-10" />
          <span className="text-xs text-white pt-[10px]">Rating</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={history} alt="History" className="h-10" />
          <span className="text-xs text-white pt-[10px]">History</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={notification} alt="Notifications" className="h-10" />
          <span className="text-xs text-white pt-[10px]">Requests</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-[94.5vw]">
        <div className="flex h-[60vh]">
          {/* Left Image */}
          <div className="h-[60vh] w-auto">
            <img src={standing} alt="Standing Man" className="h-[60vh]" />
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-[70%] pt-[1%]">
            {/* Search and Profile */}
            <div className="flex items-center justify-between h-16 px-[10%] w-full">
              <div className="flex items-center bg-white p-2 rounded-lg w-[80%]">
                <input
                  type="text"
                  placeholder="Search by username"
                  className="border-none outline-none px-2 py-1 text-lg w-full rounded-lg"
                />
                <span className="ml-3 text-gray-400">&#128269;</span>
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full pl-0">
                <i className="fas fa-user text-white text-2xl"></i>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="pt-[6%] flex flex-col justify-center items-center mt-16 text-white leading-[100px]">
              <div><span className="font-galindo font-[200] text-[56px]">
                Welcome to Rumble,
                </span>
                </div>
              <div className="font-galindo font-[1520] text-[99px]">Ms. Vanshika Panchal</div>
            </div>
          </div>
        </div>

        {/* Bottom Boxes */}
        <div className="flex justify-around h-[40vh] pt-[3%]">
          <div className="flex flex-col items-center justify-around h-[30vh] w-[25vw] rounded-lg bg-gradient-to-b from-purple-400 to-[#683494]">
            <div className="text-3xl pt-[5px] font-[800]">1v1 Battle</div>
            <div className="text-center text-xl px-[10%]">Challenge random people for 1v1 battle with any level.</div>
            <div className="bg-white px-6 py-3 rounded-md text-2xl cursor-pointer" onClick={handleOpenLevelPopup}>Let's Go!</div>
          </div>

          <div className="flex flex-col items-center justify-around h-[30vh] w-[25vw] rounded-lg bg-gradient-to-b from-purple-400 to-[#683494]">
            <div className="text-3xl pt-[5px] font-[800]">Add with Friend</div>
            <div className="text-center text-xl w-[14vw]">Search the friend's username to add them to your friend's list.</div>
            <div className="bg-white px-6 py-3 rounded-md text-2xl cursor-pointer">Find Friends!</div>
          </div>

          <div className="flex flex-col items-center justify-around h-[30vh] w-[25vw] rounded-lg bg-gradient-to-b from-purple-400 to-[#683494]">
            <div className="text-3xl pt-[5px] font-[800]">Play for Fun</div>
            <div className="text-center text-xl px-[10%]">Challenge random people just for fun and learn Competitive Programming.</div>
            <div className="bg-white px-6 py-3 rounded-md text-2xl cursor-pointer" onClick={handleOpenPlayForFunPopup}>Try Now!</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
