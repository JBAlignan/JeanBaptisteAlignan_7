// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Like.
const { Likes } = db.sequelize.models;



const auth = require('../middleware/auth');



//--CRUD

    //--CREATE

    // // Création d'un like.
    exports.likeHandler = (req, res, next) => {
        const userId = req.body.userId;
        const postId = req.params.id;

        Likes.findOne({ where: { postId: postId, userId: userId } })
            .then((like) => {
                console.log(like)
                if (like) {
                    Likes.destroy({ where: { postId: postId, userId: userId } })
                    .then(res.status(200).send({ like: false} ))
                } else {
                    Likes.create({
                        postId: postId,
                        userId: userId,
                    })
                    .then(res.status(200).send({ like: true} ))
                }
            })
        .catch (error => res.status(401).json({ error }))
        }