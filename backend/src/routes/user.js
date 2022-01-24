// Importation d'Express
const express = require('express')
// Création du routeur par la méthode Router d'Express.
const router = express.Router();
//Importation du middleware d'autentification.
const auth = require('../middleware/auth');
// Importation des fonctions de users.js du dossier controllers.
const userCtrl = require('../controllers/user');


// Routes pour l'envoi du schéma rempli au serveur.
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id', userCtrl.findUser);
router.get('/', userCtrl.findAllUsers);
router.put('/:id', auth, userCtrl.updateUser);
router.delete('/:id', auth, userCtrl.deleteUser);


// Exportation de la route.
module.exports = router;