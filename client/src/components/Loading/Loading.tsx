// Loading.tsx
import React, { useEffect, useState } from 'react';
import { useLocation  } from 'react-router-dom';
import { io } from 'socket.io-client';
// import { useParams } from 'react-router-dom';
const socket = io('http://localhost:5000');
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Loading: React.FC = () => {

  const query = useQuery(); // Extract query parameters
  const level = query.get('level');
  const ether = query.get('ether');
  const [matched, setMatched] = useState(false);
  const [opponent, setOpponent] = useState<string | null>(null);

  useEffect(() => {
    if (level && ether) {
      console.log(level,ether);
      // Emit the chosen level to the server
      socket.emit('choose_level_and_ether', { level, ether });

      // Listen for the 'start_game' event
      socket.on('start_game', ({ opponentId }) => {
        setMatched(true);
        setOpponent(opponentId);
      });
    }
    // Cleanup the socket event on component unmount
    return () => {
      socket.off('start_game');
    };
  }, [level]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner Animation */}
        <div className="w-12 h-12 rounded-full border-4 border-solid border-blue-500 border-t-transparent animate-spin"></div>
        {opponent}
        {/* Animated text */}
        <div className="text-lg font-medium text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;