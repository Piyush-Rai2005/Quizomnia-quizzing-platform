import React, { useEffect } from 'react'
import Questions from './Questions'


//import redux store//
import { useSelector } from 'react-redux'
export default function Quiz() {
  const state= useSelector(state=>state);

  useEffect(()=>(
    console.log(state)  
  ))

  function onNext(){
    console.log('Next')
  }

  function onPrev(){
    console.log('Prev')
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-white border-2 border-green-400 p-2 inline-block mb-6">
        Questions
      </h1>
      <Questions></Questions>
      <div className="flex justify-between w-full max-w-lg mt-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold transition" onClick={onPrev}>
          Prev
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition" onClick={onNext}> 
          Next
        </button>
      </div>
    </div>
  )
}
