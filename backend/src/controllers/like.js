// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Like.
const { Post } = db.sequelize.models;
const { User } = db.sequelize.models;
const { Likes } = db.sequelize.models;



const auth = require('../middleware/auth');



//--CRUD

    //--CREATE

    // // Création d'un like.
    exports.likeHandler = (req, res, next) => {
        const userId = req.body.userId;
        const postId = req.body.postId;
        console.log(req.body)
        console.log(userId);
        console.log(postId);
        Post.findOne({ where: { id: req.params.id } })
            .then(() => 
                Likes.create({
                    postId: req.body.id,
                    userId: req.body.userId,
                    likesCount: 1
                }))
        .then (post => res.status(200).json({ post }))
        .catch (error => res.status(401).json({ error }))
        }