import React from 'react';
import { Link } from 'react-router-dom';
import  './style.scss'; 
function Navbar() {
  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/Art">Art</Link>
              
        <Link to="/Technologie">  Technologie</Link>

        <Link to="/Science"> Science</Link>
        <Link to="/Cinema"> Cinema</Link>
      
      <Link to="/Login">Login</Link>
      <Link to="/Homepage">Logout</Link>
      <Link to="/Write">Write</Link></div></div>
    
  );
}

export default Navbar;


