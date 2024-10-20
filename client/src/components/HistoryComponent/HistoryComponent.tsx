  import React, {useState} from 'react';
  import home from "./../../images/home.png";
  import rating from "./../../images/rating.png";
  import history from "./../../images/history.png";
  import notification from "./../../images/notification.png";
  import standing from "./../../images/standing.png";
  import gem from "./../../images/gem.png"
  import { Bell, Home, Search, Star, ArrowLeft, User } from 'lucide-react';

  const HistoryItem = ({ id, questionLink, opponentId, result, money }: {
    id: string;
    questionLink: string;
    opponentId: string;
    result: 'won' | 'lost' | 'draw';
    money: number;
  }) => {
    const resultClass = {
      won: 'bg-[rgba(45,216,56,0.32)] text-[rgb(1,255,43)]',
      lost: 'bg-[rgba(243,46,46,0.19)] text-red-500',
      draw: 'bg-[rgba(253,253,253,0.05)] text-white',
    }[result];

    const moneyClass = money > 0 ? 'bg-[#2DD838]' : money < 0 ? 'bg-[rgba(255,0,0,0.5)]' : 'bg-[rgba(253,253,253,0.05)]';

    return (
      <div className="flex justify-between items-center h-[5vh]">
        <div className="w-[23vw] text-center text-white text-[1.8rem]">{id}</div>
        <div className="w-[23vw] text-center text-white text-[1.8rem] hover:underline cursor-pointer">{questionLink}</div>
        <div className="w-[23vw] text-center text-white text-[1.8rem] hover:underline cursor-pointer">{opponentId}</div>
        <div className="w-[23vw] flex justify-center">
          <span className={`w-[4vw] h-[3vh] flex items-center justify-center rounded-[1rem] ${resultClass}`}>
            {result === 'won' ? 'Won' : result === 'lost' ? 'Lost' : '-- Draw'}
          </span>
        </div>
        <div className="w-[23vw] flex justify-center">
          <span className={`w-[4vw] h-[3vh] rounded-[1rem] text-white flex items-center justify-center ${moneyClass}`}>
            {money !== 0 && (money > 0 ? '+' : '-')}{Math.abs(money)}
            <img src={gem} alt="Gem" className="h-[2.4vh] ml-1" />
          </span>
        </div>
      </div>
    );
  };

  const HistoryComponent: React.FC = () => {
    return (
      <div className="flex h-screen w-screen bg-cover bg-center bg-custom2-bg">
        <nav className="flex justify-between items-center h-[7vh] w-full bg-purple-900 px-8">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex items-center gap-8">
        </div>
      </nav>
        
        <main className="w-[94.5vw] flex flex-col">
          <header className="h-[7vh] flex justify-end items-center px-4">
            <div className="flex items-center bg-white rounded-[0.7rem] px-3 py-2 w-[50%]">
              <Search size={20} className="text-gray-400" />
              <input type="text" placeholder="Search" className="ml-2 outline-none flex-1" />
            </div>
            <div className="w-[30%] flex justify-center items-center h-[7vh] ml-auto">
              <User size={32} className="text-white" />
            </div>
          </header>
          
          <div className="flex items-center h-[12vh] w-[15vw] ml-8">
            <ArrowLeft size={24} className="text-white mr-4" />
            <h1 className="text-[3rem] font-[650] text-white">History</h1>
          </div>
          
          <div className="bg-[rgba(147,120,179,0.5)] mx-2 rounded-[1rem] border-2 border-white h-[82vh] overflow-hidden flex flex-col">
            <div className="flex justify-between text-[rgb(184,183,183)] px-4 py-2 h-[10vh] items-center">
              <div className="w-[23vw] text-center text-[1rem]">Battle Id</div>
              <div className="w-[23vw] text-center text-[1rem]">Question Link</div>
              <div className="w-[23vw] text-center text-[1rem]">Opponent id</div>
              <div className="w-[23vw] text-center text-[1rem]">Result</div>
              <div className="w-[23vw] text-center text-[1rem]">Money</div>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              <HistoryItem id="bid-3066" questionLink="1520-A" opponentId="saurav_s" result="won" money={7} />
              <HistoryItem id="bid-3066" questionLink="1520-A" opponentId="saurav_s" result="lost" money={-4} />
              <HistoryItem id="bid-3066" questionLink="1520-A" opponentId="saurav_s" result="draw" money={0} />
              {/* Add more HistoryItem components as needed */}
            </div>
          </div>
        </main>
      </div>
    );
  };

  const NavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex flex-col items-center h-[12vh] w-[4vw]">
      <div className="text-white mb-1">{icon}</div>
      <span className="text-white text-[12px]">{label}</span>
    </div>
  );

  export default HistoryComponent;