// Inscription.js
import  './style.scss'; 
import React from 'react';
import { Link } from 'react-router-dom';

function inscription(){
    return(
        <div className="container">
            <form>
                <h1>inscription</h1>
                <div>
                    <label htmlFor='nom'>Nom</label>
                    <input type="Text" id="nom" placeholder='Nom'/>
                </div>
                <div>
                    <label htmlFor='prenom'>Prenom</label>
                    <input type="Text" id="prenom" placeholder='Prenom'/>
                </div>
                <div>
                    <label htmlFor='numtel'>Numéro de Téléphone</label>
                    <input type="Text" id="numtel" placeholder='Numéro de Téléphone'/>
                </div>
                <div>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type="password" id="password" placeholder='Mot de passe'/>
                </div>
                <button>inscription</button>
            </form>
            <p>Vous avez déjà un compte? <Link to="/login">Connectez-vous</Link></p>
        </div>
    )
}

export default inscription;
