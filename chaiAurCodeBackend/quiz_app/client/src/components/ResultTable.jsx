import React from 'react';

export default function ResultTable() {
  return (
    <div className="mt-6 w-full overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-700 text-white">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-800 text-left border-b border-gray-600">
            <th className="px-4 py-2 text-sm font-semibold">Name</th>
            <th className="px-4 py-2 text-sm font-semibold">Attempts</th>
            <th className="px-4 py-2 text-sm font-semibold">Points</th>
            <th className="px-4 py-2 text-sm font-semibold">Result</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800">
            <td className="px-4 py-3">Piyush</td>
            <td className="px-4 py-3">02</td>
            <td className="px-4 py-3">30</td>
            <td className="px-4 py-3 text-green-400">Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
