// Footer.js
import React from "react";
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>À propos de nous</h3>
            Le site est une plateforme en ligne dédiée à la diffusion de contenus variés, allant des articles informatifs aux divertissements captivants. Notre objectif est de fournir aux utilisateurs une expérience engageante et enrichissante, en proposant un large éventail de sujets couvrant l'actualité, la culture, la technologie, le divertissement et bien plus encore. Avec une interface conviviale et des contenus de qualité, nous visons à informer, divertir et inspirer nos visiteurs, les invitant à explorer et à découvrir le monde à travers nos pages.
          </div>
          <div className="footer-column">
            <h3>Nos services</h3>
            <ul>
              <li><a href="/Technologie">Technologie</a></li>
              <li><a href="/Art">Art</a></li>
              <li><a href="/Cinema">Cinema</a></li>
              <li><a href="/Science">Science</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Adresse: 123 Rue de Rivoli, Paris, France</li>
              <li>Email: info@example.com</li>
              <li>Téléphone: +123 456 7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


