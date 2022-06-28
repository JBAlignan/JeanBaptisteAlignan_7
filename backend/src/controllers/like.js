// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Like.
const { Likes } = db.sequelize.models;



const auth = require('../middleware/auth');


//--CRUD

    //--CREATE

    // Création d'un like.
    exports.toLike = (req, res, next) => {
        // Comparaison de l'id de l'utilsateur et des userId de la table likes de la BDD.
        console.log("request", req.body)
        Likes.findOne({
            where: {
                userId: req.body.userId,
                postId: req.body.postId
            }
        })
        .then((res) => {
            console.log("request", res)
            // Si il n'y a pas match entre le postId et le userId.
            if (res == null) {
                Likes.create({
                    userId: req.body.userId,
                    postId: req.body.postId
                });
                res.status(201).json({ message: "Like ajouté" });
            }
        
        })
        .catch(error => res.status(401).json({ error: error }))
    }