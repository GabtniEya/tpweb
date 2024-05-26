const bcrypt = require('bcrypt');
const connection = require('../config/db');

// Inscription
exports.signup = (req, res) => {
  const { nom, prenom, numtel, password } = req.body;

  // Hachage du mot de passe
  bcrypt.hash(password, 10, (err, hash) => {
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
};

// Connexion
exports.login = (req, res) => {
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
};
