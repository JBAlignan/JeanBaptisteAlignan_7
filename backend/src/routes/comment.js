const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
// Importation des fonctions de users.js du dossier controllers.
const commentCtrl = require('../controllers/comment');

// Routes pour l'envoi du schéma rempli au serveur.
router.post('/posts/:id/comments', commentCtrl.createComment);


module.exports = router;
