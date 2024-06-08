import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAl, setNumberAl] = useState(false);
  const [charAl, setcharAl] = useState(false);
  const [password, setpassword] = useState("");

  //use ref hook
  const passRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopsdfghjklxcvbnmQWERTYUIOASDFGHJKZXCVBNM";

    if (numberAl) str += "2345678901";
    if (charAl) str += "!@#$%^&*()_+/*<>?.|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAl, charAl, setpassword]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, numberAl, charAl, passwordGen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 my-3 rounded-lg"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPass}
            className="outline-none px-3 py-1 bg-blue-800 text-white my-2.5 rounded-lg shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAl}
              id="numberInput"
              onChange={() => {
                setNumberAl((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAl}
              id="charInput"
              onChange={() => {
                setcharAl((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
