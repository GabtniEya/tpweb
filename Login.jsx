// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import  './style.scss'; 
import axios from 'axios';


function Login() {

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form>
        <div>
          <label htmlFor='numtel'>Numéro de Téléphone</label>
          <input type="text" id="numtel" placeholder='Numéro de Téléphone' />
        </div>
        <div>
          <label htmlFor='password'>Mot de passe</label>
          <input type="password" id="password" placeholder='Mot de passe' />
        </div>
        <button>Connexion</button>
      </form>
      <p>Vous n'avez pas de compte ? <Link to="/Signup">Signup</Link></p>
      <Link to="/">Retour à la page principale</Link>
    </div>
  );
}

export default Login;

