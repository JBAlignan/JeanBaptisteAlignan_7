// Importation de l'ORM Sequelize et des schémas de données nécessaires
const {db, Post, Comment} = require('../models/index');
// Importation du modèle Comment.




//--CRUD

    //--CREATE

    //--Création d'un commentaire.
    exports.createComment = (req, res, next) => {
        // let commentObject = req.body;
       
        Post.findOne({ where: { id: req.params.id } })
        // console.log(Post.findOne({ where: { id: req.params.id } }))
        // console.log("abcd" + req.params.id)
        .then(() => Comment.create({
            postId: req.body.id,
            content: req.body.content,
            userId: req.body.userId
        }))
        .catch(error => (res.status(401).json({ error: error })))
            
        
        .then(comment => res.status(201).json(comment))
        .catch(error) (res.status(401).json({ error: error }))
    }