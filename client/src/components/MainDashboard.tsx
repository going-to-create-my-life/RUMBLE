import React from 'react';
import logo from './../images/logo192.png'
const MainDashboard = () => {
  return (
    <div className="flex-grow p-4 mr-[15%] ml-[1%]">
      {/* User Info */}
      <div className="flex items-center justify-between mb-6 h-1/10 pt-14">
        <div className="flex gap-4 w-[80%]">
        <div className="bg-primary w-12 h-12 rounded-full mr-4"></div>
        <span className="text-3xl font-bold text-black my-auto">animeshkumar-nathaya</span>
        </div>
        <div className="w-[20%]">
          <div className="absolute right-[17%]">Setting</div>
        </div>
        <div>

        </div>
      </div>
      <div className="flex gap-[3%] h-[85%]">
      {/* Button Actions */}
      <div className="flex flex-col gap-1 mb-4 w-1/5">
        <button className="bg-primary flex justify-center items-center text-white px-4 py-2 rounded h-[8%]">
          <img className="w-[20%] h-[80%]"  alt="img1" src={logo} />
          <div className="w-[20%]">Play</div>
        </button>
        <button className="bg-primary flex justify-center items-center text-white px-4 py-2 rounded h-[8%]">
          <img className="w-[20%] h-[80%]"  alt="img1" src={logo} />
          <div className="w-[20%]">Rated</div>
        </button>
        <button className="bg-primary flex justify-center items-center text-white px-4 py-2 rounded h-[8%]">
          <img className="w-[20%] h-[80%]"  alt="img1" src={logo} />
          <div className="w-[20%]">Bet</div>
        </button>
        <button className="bg-primary flex justify-center items-center text-white px-4 py-2 rounded h-[8%]">
          <img className="w-[20%] h-[80%]"  alt="img1" src={logo} />
          <div className="w-[20%]">Invite</div>
        </button>
      </div>

      {/* Game Mode Cards */}
      <div className="grid grid-cols-2 gap-4 w-4/5">
        <div className="bg-gray-200 shadow rounded-lg flex">
          <div className="w-[80%] p-9 flex flex-col">
          <h3 className="text-lg font-bold h-[20%]">1v1 Speed Battle</h3>
          <p className="h-[80%]">lorevhjbknddjkoljlfjlemvlenkvknekv</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mx-[10%] h-[20%]">Create</button>
          </div>
          <div className="bg-primary w-[40%] rounded-r-lg ">
            2nd Div
          </div>
        </div>
        <div className="bg-gray-200 shadow rounded-lg flex">
          <div className="w-[80%] p-9 flex flex-col">
          <h3 className="text-lg font-bold h-[20%]">1v1 Speed Battle</h3>
          <p className="h-[80%]">lorevhjbknddjkoljlfjlemvlenkvknekv</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mx-[10%] h-[20%]">Create</button>
          </div>
          <div className="bg-primary w-[40%] rounded-r-lg ">
            2nd Div
          </div>
        </div>
        <div className="bg-gray-200 shadow rounded-lg flex">
          <div className="w-[80%] p-9 flex flex-col">
          <h3 className="text-lg font-bold h-[20%]">1v1 Speed Battle</h3>
          <p className="h-[80%]">lorevhjbknddjkoljlfjlemvlenkvknekv</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mx-[10%] h-[20%]">Create</button>
          </div>
          <div className="bg-primary w-[40%] rounded-r-lg ">
            2nd Div
          </div>
        </div>
        <div className="bg-gray-200 shadow rounded-lg flex">
          <div className="w-[80%] p-9 flex flex-col">
          <h3 className="text-lg font-bold h-[20%]">1v1 Speed Battle</h3>
          <p className="h-[80%]">lorevhjbknddjkoljlfjlemvlenkvknekv</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mx-[10%] h-[20%]">Create</button>
          </div>
          <div className="bg-primary w-[40%] rounded-r-lg ">
            2nd Div
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
