import Card from './components/card';
import { useState } from 'react'
import './App.css'
import PasswordGenrator from './components/passwordGenrator';

function App() {
  const [counter,setCounter] = useState(0);

  const IncreaseValue =()=>{
    if(counter>=20){
     setCounter(counter);
    }
    else {
       setCounter(counter+1);
    }
        
  }

  const DecreseValue=()=>{
    if(counter<=0){
       setCounter(counter);
    }
    else{
       setCounter(counter-1);
    }
    
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="mb-5 text-2xl text-center text-red-500">
          Hello React Vite App {counter}
        </h1>
        <button
          className="border border-gray-200 text-gray-700 py-2 px-3 rounded w-[300px] bg-slate-100 hover:bg-slate-200"
          onClick={IncreaseValue}
        >
          Add a value
        </button>
        <button
          className="border border-gray-200 text-gray-700 py-2 px-3 rounded mt-4 w-[300px] bg-slate-100 hover:bg-slate-200"
          onClick={DecreseValue}
        >
          Decrease the value
        </button> */}

        {/* <Card  userName="Himanshu" /> */}
        <PasswordGenrator />
      </div>
    </>
  );
}

export default App
