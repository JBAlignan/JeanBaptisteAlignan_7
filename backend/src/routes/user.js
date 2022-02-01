// Importation d'Express
const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
// Importation des fonctions de users.js du dossier controllers.
const userCtrl = require('../controllers/user');


// Routes pour l'envoi du schéma rempli au serveur.
router.post('/user/login', userCtrl.login);
router.post('/user/signup', userCtrl.signup);
router.get('/user/:id', userCtrl.findUser);
router.get('/', userCtrl.findAllUsers);
router.put('/user/:id', auth, userCtrl.updateUser);
router.delete('/user/:id', userCtrl.deleteUser);


// Exportation de la route.
module.exports = router;