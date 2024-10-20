  import React, {useState} from 'react';
  import Select from 'react-tailwindcss-select';
  import Codeium from '../Codeium/Codeium';
  import { Clock } from 'lucide-react';
  import MessageBox from './../MessageBox'

  const CodingChallengeInterface = () => {
    return (
      <div className="flex flex-col h-screen bg-custom2-bg p-4">
        <div className="grid grid-cols-3 gap-4 flex-grow">
          {/* Left column */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="flex-grow space-y-4">
              <div className="bg-red-700 text-white p-3 rounded">
                <h2 className="text-xl font-bold">Animesh</h2>
              </div>
              <div className="text-xl font-bold text-center">VS</div>
              <div className="bg-red-700 text-white p-3 rounded">
                <h2 className="text-xl font-bold">Sourav</h2>
              </div>
            </div>
            <div className="bg-black text-white text-4xl font-bold p-4 rounded flex items-center justify-center">
              <Clock className="mr-2" />
              10 : 59
            </div>
          </div>

          {/* Middle column */}
          <div className="bg-black text-white rounded-lg shadow p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Question Name</h2>
            <p className="mb-4">
            Problem Statement Problem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem Statement Problem StatementProblem Statement Problem StatementProblem StatementProblem Statement Problem Statement Problem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem Statement Problem StatementProblem Statement Problem StatementProblem StatementProblem Statement Problem Statement Problem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem Statement Problem Statement Problem Statement Problem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem StatementProblem Statement Problem StatementProblem Statement Problem StatementProblem StatementProblem Statement</p>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="bg-black text-white rounded-lg shadow p-4 h-1/2">
            {/*HERE MENY*/}
              <h2 className="text-xl font-bold mb-2">Code</h2>
              <Codeium/>
            </div>
            <div className="bg-black rounded-lg shadow p-4 h-1/2">
            <div className="p-2 bg-gray-500 mb-[5px] rounded-t-xl">
              <h2 className="text-xl font-bold mx-5 text-white">Results</h2>
            </div>
            <div>
              <MessageBox/>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">RUN</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    );
  };

  export default CodingChallengeInterface;