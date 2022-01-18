// Importation d'Express
const express = require('express');
// Importation de Cors (pour éviter erreur CORS)
const cors = require("cors");
//Importation de path; donne accès à notre système de fichier.
const path = require('path');
//Importation des routes.
const userRoutes = require('./src/routes/users');
// Variables d'environnement pour éviter l'accès à des données sensibles.
require('dotenv').config();


const app = express();

// Gestion du CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  // Middleware global pour éviter erreur CORS
app.use(cors());

app.use(express.json());


//Enregistrement des routes.
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);

module.exports = app;