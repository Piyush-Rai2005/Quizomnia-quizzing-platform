import React from 'react';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';

export default function Result() {
  function onRestart() {
    console.log('on Restart');
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4 py-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white border-2 border-green-400 p-4 inline-block mb-10 rounded-md shadow-lg">
        Quiz Application
      </h1>

      {/* Quiz Result Details */}
      <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium">Username:</span>
          <span className="font-bold">Piyush</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium">Total Quiz Points:</span>
          <span className="font-bold">50</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium">Total Questions:</span>
          <span className="font-bold">05</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium">Total Attempts:</span>
          <span className="font-bold">02</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium">Total Earn Points:</span>
          <span className="font-bold">30</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-medium">Quiz Result:</span>
          <span className="font-bold text-green-400">Passed</span>
        </div>
      </div>

      {/* Restart Button */}
      <div className="mt-6">
        <Link
          to="/"
          onClick={onRestart}
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-200 shadow-md"
        >
          Restart
        </Link>
      </div>

      {/* Result Table */}
      <div className="mt-8 w-full max-w-2xl">
        <ResultTable />
      </div>
    </div>
  );
}
