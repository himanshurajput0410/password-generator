import {useCallback, useState,useEffect,useRef} from 'react'

const PasswordGenrator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTuVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "[]{}()?/*&^%$#@!`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md px-4 py-4 mx-auto my-8 text-white bg-gray-800 rounded-lg">
        <h1 className="mb-4 text-2xl text-white ">
          Password Generator 
        </h1>
        <div className="flex mb-4 overflow-hidden shadow rounded-l-md ">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1 text-black outline-none rounded-l-md placeholder:text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            type="button"
            className="px-3 py-1 text-center text-black bg-gray-200 rounded-r-md hover:bg-gray-300"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="NumberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="CharInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenrator
