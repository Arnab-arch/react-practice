// this is the code for simple coiunter to understand usestate hook 

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-center w-80">
        
        <h1 className="text-3xl font-bold mb-6">Counter</h1>
        
        <p className="text-5xl font-extrabold mb-8 text-blue-400">
          {count}
        </p>

        <div className="flex justify-between gap-3">
          
          <button
            onClick={decrement}
            className="flex-1 bg-red-500 hover:bg-red-600 active:scale-95 transition-all py-2 rounded-lg font-semibold"
          >
            −
          </button>

          <button
            onClick={reset}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition-all py-2 rounded-lg font-semibold text-black"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="flex-1 bg-green-500 hover:bg-green-600 active:scale-95 transition-all py-2 rounded-lg font-semibold"
          >
            +
          </button>

        </div>

      </div>
    </div>
  );
}

export default Counter;