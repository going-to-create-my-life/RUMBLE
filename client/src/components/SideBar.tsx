import React from 'react';

const SideBar = () => {
  return (
    <>
    <div className="w-[3.35%] bg-secondary opacity-50 h-full flex flex-col items-center py-4">
      {/* Add sidebar items */}
    <div className="absolute h-full w-[27.32%] bg-primary z-100 mx-0 my-0">dsfsds</div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[60%] bg-primary mb-[30%]"></div>
      <div className="h-[4.1%] w-[2%] bg-primary absolute bottom-[2%]"></div>
    </div>
    <div className="w-[12%] bg-secondary h-full flex flex-col items-center py-4">
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%] hover:bg-slate-400">Play</div>
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%]">Play</div>
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%]">Play</div>
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%]">Play</div>
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%]">Play</div>
      <div className="h-[4.1%] w-[60%] text-white pt-[1.5%] text-2xl font-bold mb-[8.5%]">Play</div>
      <div className="h-[4.1%] w-[2%] text-red-600 text-2xl font-bold absolute bottom-[2%]">Logout</div>
      <div className="h-10 w-10 mb-4 absolute bottom-0"></div>
    </div>
    </>
  );
};

export default SideBar;
