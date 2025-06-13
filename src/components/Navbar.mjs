import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [btntext,setBtntext]= useState("Yellow mode");
  const togglebtn =()=>{
    if(props.mode === "dark"){
      setBtntext('Dark mode');
    }else{
      setBtntext('Yellow mode');
    }
  }
   const apptog =()=>{
    props.togglemode();
   }

   const bothF =()=>{
    apptog();
    togglebtn();
   }
  return (
    <div className={`b`}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className={`container-fluid `}>
    <a className={`"navbar-brand" href="/"  text-${props.mode === "dark"?"warning":"dark"}`}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Form">Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="/Dropdown">Dropdown </Link>
          </li>
        </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    <div className={`form-check form-switch text-${props.mode === "warning"?"dark":"warning"}`}>
      <input className="form-check-input"  onClick={bothF} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}
