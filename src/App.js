
import React , {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
// import { useState } from 'react'

function App() {
   const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#818081';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  };
  

  return (
    
    <>
      <Navbar title="TextUtils" toggleMode={toggleMode} />
      <Textform textArea="Enter your text here" mode={mode} />
    </>
  );
}

export default App;
