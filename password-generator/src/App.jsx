/* eslint-disable no-unused-vars */

import React, { useState } from "react";

function App() {
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz@#$%&";
    let pass = "";

    for (let i = 1; i <= Number(length); i++) {
      const index = Math.floor(Math.random() * chars.length);
      pass += chars[index];
    }
    return pass;
  };

  const handClick = (e) => {
    e.preventDefault();

    return setPassword(generatePassword());
  };
  return (
    <div className="bg-red-400 h-screen w-screen flex items-center justify-center">
      <div className="w-[550px] h-56 bg-teal-200 rounded-md flex items-center justify-center flex-col gap-y-5">
        <h3 className="text-xl font-semibold">Random Password Generator</h3>
        <div className="flex items-center justify-center gap-x-5">
          <input
            type="number"
            className="h-7 rounded-md outline-none text-center"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <button
            className="bg-black text-white h-7 px-2 rounded-md"
            onClick={handClick}
          >
            Click
          </button>
        </div>
        <input
          type="text"
          className="h-7 rounded-md outline-none text-center"
          value={password}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
