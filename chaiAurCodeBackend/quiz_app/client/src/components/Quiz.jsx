import React from 'react'
import Questions from './Questions'

export default function Quiz() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-white border-2 border-green-400 p-2 inline-block mb-6">
        Questions
      </h1>
      <Questions></Questions>
      <div className="flex justify-between w-full max-w-lg mt-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold transition">
          Prev
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition">
          Next
        </button>
      </div>
      



    </div>
  )
}
