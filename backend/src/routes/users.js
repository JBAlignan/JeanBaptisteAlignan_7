// Importation d'Express
const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
// Importation des fonctions de users.js du dossier controllers.
const userCtrl = require('../controllers/users');


// Routes pour l'envoi du schéma rempli au serveur.
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


// Exportation de la route.
module.exports = router;