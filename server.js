const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'jdbc:mysql://localhost:3306/blogs', // L'hôte sur lequel tourne MySQL (peut également être une adresse IP)
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

// Route pour la connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Requête pour vérifier les informations d'identification
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur du serveur');
    } else if (results.length === 0) {
      res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    } else {
      res.send('Connexion réussie !');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

