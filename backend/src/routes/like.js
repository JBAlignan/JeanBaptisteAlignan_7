const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
// Importation des fonctions de like.js du dossier controllers.
const likeCtrl = require('../controllers/like');

// Routes pour l'envoi du schéma rempli au serveur.
router.post('/:id', likeCtrl.likeHandler);
router.get('/', likeCtrl.likeHandler)

module.exports = router;

