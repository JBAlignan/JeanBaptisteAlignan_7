// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Comment.
const { Post } = db.sequelize.models;
const { Comment } = db.sequelize.models;



//--CRUD

    //--CREATE

    //--Création d'un commentaire.
    exports.createComment = (req, res, next) => {
        // let commentObject = req.body;
        try{
        Post.findOne({ where: { id: req.params.id } })
        Comment.create({
            postId: req.params.id,
            content: req.body.content,
            userId: req.params.userId
        })
        res.status(201).json(Comment)
        }
        // .then(comment => res.status(201).json(comment))
        catch(error) {res.status(401).json({ error: error })}
    }