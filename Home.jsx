import  './style.scss'; 
import React, { useState } from "react";
const postes = [
    { id: 1, titre: "SunRISE", desc: "the setting or descent of the sun below the horizon in the evening. the atmospheric and scenic phenomena accompanying this.", image: "https://img.freepik.com/photos-gratuite/coucher-soleil-mer-plage_107420-10057.jpg?t=st=1713913841~exp=1713917441~hmac=642a5d6d2a2bc344d2cb9265143dbc0c66a131667f45900e7f2fbfaa98c9e763&w=740" },
    { id: 2, titre: "SunSet", desc: "the setting or descent of the sun below the horizon in the evening. the atmospheric and scenic phenomena accompanying this.", image: "https://img.freepik.com/photos-gratuite/tir-vertical-plage-entouree-par-vagues-mer-sous-ciel-nuageux-pendant-beau-coucher-soleil_181624-61071.jpg?t=st=1713914022~exp=1713917622~hmac=46333358b984b439cd9a8372775c14efb7cb5b4ecfff2b9046125000d0e94143&w=740" },
    { id: 3, titre: "Moon", desc: "MoonRise (précédemment nommée Lunar South Pole-Aitken Basin Sample Return) est une mission spatiale lunaire que l'agence spatiale américaine de la NASA envisage de lancer au cours de la décennie 2010 dans le cadre de son programme New Frontiers regroupant des missions d'exploration du système solaire à coût intermédiaire", image: "https://img.freepik.com/photos-gratuite/gros-plan-bateau-bois-plage-entouree-par-mer-sous-ciel-nuageux-pendant-coucher-du-soleil_181624-19855.jpg?t=st=1713914096~exp=1713917696~hmac=2a6551a5b5ff0cfe1eb9b276aa553534e5fda93b96bd1ebfa9834e44d0434399&w=740" }
];

function Home() {
    const [posts, setPosts] = useState(postes);

    return (
        <div className="posts">
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <div className="image">
                        <img src={post.image} alt={post.titre} />
                    </div>
                    <div className="title-desc">
                        <h1>{post.titre}</h1>
                        <p>{post.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;


