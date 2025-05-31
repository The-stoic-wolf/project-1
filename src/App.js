import React, { useState } from 'react'    //imrs to import this line
import Form from './components/Form.mjs';
import Navbar from './components/Navbar.mjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.mjs';

//--------------------------<Navbar>---------------------------
export function App(){
  const[mode,setMode] = useState("dark");
  const togglemode =()=>{
    if(mode === "warning"){
      setMode('dark');
      document.body.style.backgroundColor ='white';
    }else{
      setMode('warning');
      document.body.style.backgroundColor ='black';
    }
  }
 return(
  <>
  <Router>
      <Navbar togglemode={togglemode} mode={mode} />
    <Routes>
          <Route path="/"  element={<div className='container'  style={{color: mode ==='dark'?'black':'white'}}><h2>WELCOME HOME!</h2></div>} />
          <Route path="/Dropdown"  element={<div className='container'  style={{color: mode ==='dark'?'black':'white'}}><h3>Click on Form or About to see performance</h3></div>} />
          <Route path="/Form" element={<Form  togglemode={togglemode} mode={mode} title={"Text enter here"}/>} />
          <Route path="/About" element={<About  togglemode={togglemode} mode={mode}/>} />
     </Routes>
 </Router>   
   </>
  );
}
export default App;
