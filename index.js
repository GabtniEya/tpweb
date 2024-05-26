// backend/routes/index.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost', // L'hôte sur lequel tourne MySQL (peut également être une adresse IP)
  user: 'root',      // L'utilisateur de la base de données
  password: 'root',  // Le mot de passe de l'utilisateur
  database: 'users'  // Le nom de la base de données à laquelle se connecter
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
    return;
  }
  console.log('Connexion à MySQL réussie');
});

// Route de base
router.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil!');
});

// Route pour l'inscription
router.post('/Signup', (req, res) => {
    const { nom, prenom, numtel, password } = req.body;

    // Hachage du mot de passe
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur du serveur');
            return;
        }

        // Insertion de l'utilisateur dans la base de données
        const query = 'INSERT INTO users (nom, prenom, numtel, password) VALUES (?, ?, ?, ?)';
        connection.query(query, [nom, prenom, numtel, hash], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erreur du serveur');
                return;
            }
            res.send('Inscription réussie!');
        });
    });
});

// Route pour la connexion
router.post('/login', (req, res) => {
    const { numtel, password } = req.body;

    // Recherche de l'utilisateur par numtel
    const query = 'SELECT * FROM users WHERE numtel = ?';
    connection.query(query, [numtel], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur du serveur');
            return;
        }

        if (results.length === 0) {
            res.status(401).send('Numéro de téléphone ou mot de passe incorrect');
            return;
        }

        // Comparaison du mot de passe haché
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erreur du serveur');
                return;
            }

            if (!isMatch) {
                res.status(401).send('Numéro de téléphone ou mot de passe incorrect');
                return;
            }

            res.send('Connexion réussie!');
        });
    });
});

module.exports = router;

// fichier principal (server.js ou app.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes/index');

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Utilisation des routes définies
app.use('/', routes);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

