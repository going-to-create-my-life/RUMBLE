import React from 'react';
import { FaUser, FaLock, FaGithub, FaApple, FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-purple-500 p-8 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-black py-2 rounded-md mb-2">Login Here!!</h2>
        <p className="text-black mb-4">with existing account</p>
        
        <form action="#">
          <div className="flex items-center mb-4 border border-gray-300 rounded-lg">
            <FaUser className="p-2 bg-gray-300 rounded-l-md" />
            <input 
              type="text" 
              placeholder="username/ email id" 
              className="p-2 w-full rounded-r-md focus:outline-none"
              required 
            />
          </div>

          <div className="flex items-center mb-4 border border-gray-300 rounded-lg">
            <FaLock className="p-2 bg-gray-300 rounded-l-md" />
            <input 
              type="password" 
              placeholder="password" 
              className="p-2 w-full rounded-r-md focus:outline-none" 
              required 
            />
          </div>

          <button type="submit" className="w-full py-2 text-black rounded-lg hover:bg-purple-700">
            Log in
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-black">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <h2 className="text-black bg-purple-900 py-2 rounded-md mb-2">Join Now!!</h2>
        <p className="text-black mb-4">and start competing</p>

        <button className="w-full py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-3 hover:opacity-90">
          <FaGithub className="mr-2" /> Sign up with GitHub
        </button>

        <button className="w-full py-2 bg-black text-white rounded-lg flex items-center justify-center mb-3 hover:opacity-90">
          <FaApple className="mr-2" /> Sign up with Apple
        </button>

        <button className="w-full py-2 bg-red-600 text-white rounded-lg flex items-center justify-center hover:opacity-90">
          <FaGoogle className="mr-2" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
