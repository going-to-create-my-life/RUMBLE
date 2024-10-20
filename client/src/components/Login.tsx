import React from 'react';
import { FaUser, FaLock, FaGithub, FaApple, FaGoogle } from 'react-icons/fa';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-purple-800 bg-opacity-0 ">
      <div className="bg-[#1f1f3d] bg-opacity-75 backdrop-blur-lg p-8 rounded-[20px] shadow-lg w-[450px] text-center relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-white text-2xl font-semibold mb-2 pt-10">Welcome Back!</h2>
        <p className="text-gray-300 mb-4">Don't have an account? <span className="text-blue-400">Sign Up</span></p>

        <form action="#">
          <div className="flex items-center mb-4 border border-gray-600 rounded-lg">
            <FaUser className="p-2 bg-gray-600 text-white rounded-l-md" />
            <input
              type="text"
              placeholder="Username / Email ID"
              className="p-2 w-full rounded-r-md bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center mb-4 border border-gray-600 rounded-lg">
            <FaLock className="p-2 bg-gray-600 text-white rounded-l-md" />
            <input
              type="password"
              placeholder="Password"
              className="p-2 w-full rounded-r-md bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Log in
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-500" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-1 border-gray-500" />
        </div>

        <h2 className="text-white text-lg font-semibold mb-2">Join Now!</h2>
        <p className="text-gray-400 mb-4">and start competing</p>

        <button className="w-full py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-3 hover:opacity-90">
          <FaGithub className="mr-2" /> Sign up with GitHub
        </button>

        <button className="w-full py-2 bg-black text-white rounded-lg flex items-center justify-center mb-3 hover:opacity-90">
          <FaApple className="mr-2" /> Sign up with Apple
        </button>

        <button onClick={() => window.location.href = "http://localhost:5000/auth/google/callback"} className="w-full py-2 bg-red-600 text-white rounded-lg flex items-center justify-center hover:opacity-90">
          <FaGoogle className="mr-2" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
