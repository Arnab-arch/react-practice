import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passref = useRef(null);

  const passwordGen = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (number) str += "0123456789";
  if (character) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * str.length);
    pass += str.charAt(index);
  }

  setPassword(pass);
}, [length, number, character]);

useEffect(() => {
  passwordGen();
}, [passwordGen]);

  const copypass = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[500px] max-w-full">

        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>

     
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passref}
            className="w-full p-2 rounded-l-lg bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={copypass}
            className="bg-blue-500 px-4 rounded-r-lg hover:bg-blue-600 transition"
          >
            Copy
          </button>
        </div>

        
        <div className="mb-3">
          <label className="block mb-1">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

    
        <div className="flex justify-between mb-2">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(prev => !prev)}
          />
        </div>

     
        <div className="flex justify-between">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter(prev => !prev)}
          />
        </div>

      </div>
    </div>
  );
}

export default PasswordGenerator;