const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
//Importation de la gestion de création de nom de fichier dans la constante multer.
const multer = require('../middleware/multer-config');
// Importation des fonctions de users.js du dossier controllers.
const postCtrl = require('../controllers/post');


// Routes pour l'envoi du schéma rempli au serveur.
router.post('/', multer, postCtrl.createPost);
router.get('/', postCtrl.findAllPosts);
router.get('/:id', multer, postCtrl.findOnePost);
router.put('/:id', auth, multer, postCtrl.updatePost);
router.delete('/:id', auth, multer, postCtrl.deletePost);

module.exports = router;