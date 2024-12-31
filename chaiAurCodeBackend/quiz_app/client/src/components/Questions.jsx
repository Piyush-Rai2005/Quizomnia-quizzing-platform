import React, { useEffect, useState } from "react";
import data from "../database/data";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];
  useEffect(() => {
    console.log(question);
  });

  function onSelect() {
    console.log("radio button changes");
  }

  return (
    <div className="questions flex flex-col items-center justify-center p-8 bg-gray-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold text-white border-2 border-green-400 p-4 inline-block mb-6 rounded-md">
        {question.question}
      </h2>

      <ul className="space-y-6 w-full max-w-lg">
        {question.options.map((q, i) => (
          <li
            key={i}
            className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer transition"
          >
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
              className="w-5 h-5 text-green-500 focus:ring-2 focus:ring-green-400 accent-green-500 cursor-pointer"
            />
            <label
              htmlFor={`q${i}-option`}
              className="ml-4 text-lg font-medium text-gray-300 cursor-pointer"
            >
              {q}
            </label>
          </li>
        ))}
      </ul>

        
    </div>
  );
}
