// Art.js

import React from 'react';

function Art() {
    return (
        <div className="art-page">
            <h1>Art</h1>
            <p>Une exploration de l'art à travers différentes formes, styles et périodes.</p>
            
            {/* Galerie d'œuvres d'art */}
            <div className="art-gallery">
                {/* Première œuvre d'art */}
                <div className="art-item">
                    <img src="lien_vers_image" alt="Artwork 1" />
                    <h3>Titre de l'œuvre 1</h3>
                    <p>Description de l'œuvre 1</p>
                </div>
                
                {/* Deuxième œuvre d'art */}
                <div className="art-item">
                    <img src="lien_vers_image" alt="Artwork 2" />
                    <h3>Titre de l'œuvre 2</h3>
                    <p>Description de l'œuvre 2</p>
                </div>
                
                {/* Ajoutez plus d'œuvres d'art selon vos besoins */}
            </div>
            
            {/* Histoire de l'art */}
            <div className="art-history">
                <h2>Histoire de l'art</h2>
                <p>Une exploration de l'évolution de l'art à travers les époques.</p>
            </div>
            
            {/* Événements et expositions */}
            <div className="art-events">
                <h2>Événements et expositions</h2>
                <p>Découvrez les événements artistiques à venir et les expositions en cours.</p>
            </div>
            
            {/* Ressources supplémentaires */}
            <div className="art-resources">
                <h2>Ressources supplémentaires</h2>
                <p>Explorez d'autres ressources pour en apprendre davantage sur l'art.</p>
            </div>
        </div>
    );
}

export default Art;
