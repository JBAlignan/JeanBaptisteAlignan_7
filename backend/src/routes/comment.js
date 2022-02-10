const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
// Importation des fonctions de users.js du dossier controllers.
const commentCtrl = require('../controllers/comment');
const { route } = require('./user');

// Routes pour l'envoi du schéma rempli au serveur.
router.post('/posts/:id/comments', commentCtrl.createComment);
router.get('/posts/:id/comments', commentCtrl.findAllComments);
router.get('/posts/:id/comments/:id', commentCtrl.findOneComment);
router.put('/posts/:id/comments/:id', commentCtrl.updateComment);
router.delete('/posts/:id/comments/:id', commentCtrl.deleteComment);



module.exports = router;
