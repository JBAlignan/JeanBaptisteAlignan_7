// Importation de l'infrastructure d'application Web Node.js
const express = require('express')

// Création du routeur
const router = express.Router()

const userCtrl = require('../../controllers/users');
router.post('/signup', userCtrl.signup);

module.exports = router;