// Header.js
import React from "react";
import './style.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><u><i>Hello </i></u></div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Accueil</a></li>
            <li className="nav-item"><a href="/about">À propos</a></li>
            <li className="nav-item"><a href="/services">Services</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;