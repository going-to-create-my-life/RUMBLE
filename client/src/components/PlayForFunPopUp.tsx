import React from 'react';

interface PlayForFunPopUpProps {
  onClose: () => void;
}

const PlayForFunPopUp: React.FC<PlayForFunPopUpProps> = ({ onClose }) => {
  const levels = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gray-200 px-4 py-2 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-semibold">Play for Fun</h2>
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
          
          <p className="text-center mb-4">
            Challenge random people just for fun and learn Competitive Programming.
          </p>
          
          <button className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayForFunPopUp;