// Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner Animation */}
        <div className="w-12 h-12 rounded-full border-4 border-solid border-blue-500 border-t-transparent animate-spin"></div>
        
        {/* Animated text */}
        <div className="text-lg font-medium text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
