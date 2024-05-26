import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numtel, setNumtel] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom, prenom, numtel, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Inscription réussie !');
    } else {
      setMessage(data.errors ? data.errors.map(err => err.msg).join(', ') : 'Erreur lors de l\'inscription');
    }
  };

  return (
    <div className="Signup">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nom'>Nom</label>
          <input 
            type="text" 
            id="nom" 
            placeholder='Nom' 
            value={nom} 
            onChange={(e) => setNom(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='prenom'>Prenom</label>
          <input 
            type="text" 
            id="prenom" 
            placeholder='Prenom' 
            value={prenom} 
            onChange={(e) => setPrenom(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='numtel'>Numéro de Téléphone</label>
          <input 
            type="text" 
            id="numtel" 
            placeholder='Numéro de Téléphone' 
            value={numtel} 
            onChange={(e) => setNumtel(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='password'>Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            placeholder='Mot de passe' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Inscription</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/">Retour à la page principale</Link>
    </div>
  );
}

export default Signup;


