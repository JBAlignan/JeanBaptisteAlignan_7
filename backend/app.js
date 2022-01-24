// Importation d'Express
const express = require('express');
// Importation de Cors (pour éviter erreur CORS)
const cors = require("cors");
//Importation de path; donne accès à notre système de fichier.
const path = require('path');
//Importation des routes.
const userRoutes = require('./src/routes/user');
const postRoutes = require('./src/routes/post');
const commentRoutes = require('./src/routes/comment');
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


app.use('/images', express.static(path.join(__dirname, 'images')));
//Enregistrement des routes utilisateur.
app.use('/api/auth', userRoutes);
app.put('/api/auth/:id', userRoutes);
app.delete('/api/auth/:id', userRoutes);
//Enregistrement des routes publications.
app.use('/api/posts', postRoutes);
app.put('/api/posts/:id', postRoutes);
app.delete('/api/posts/:id', postRoutes);
//Enregistrement des routes publications.
app.use('/api/posts/:id/comments', commentRoutes)


module.exports = app;