const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

// Validation et assainissement des données
const signupValidation = [
  check('nom').notEmpty().withMessage('Le nom est requis'),
  check('prenom').notEmpty().withMessage('Le prénom est requis'),
  check('numtel').isMobilePhone().withMessage('Numéro de téléphone invalide'),
  check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères')
];

const loginValidation = [
  check('numtel').isMobilePhone().withMessage('Numéro de téléphone invalide'),
  check('password').notEmpty().withMessage('Le mot de passe est requis')
];

// Route pour l'inscription
router.post('/signup', signupValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  authController.signup(req, res)
});

// Route pour la connexion
router.post('/login', loginValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  authController.login(req, res);
});

module.exports = router;
