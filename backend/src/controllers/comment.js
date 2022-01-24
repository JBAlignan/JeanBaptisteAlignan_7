// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Comment.
const { Comment } = db.sequelize.models;

//--CRUD

    //--CREATE

    //--Création d'un commentaire.
    exports.createComment = (req, res, next) => {
        Comment.create({
            content: req.params.content
        })
        .then(comment => res.status(201).json(comment))
        .catch(error => res.status(401).json({ error: error }))
    }