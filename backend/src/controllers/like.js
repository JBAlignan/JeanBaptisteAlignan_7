// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Like.
const { Post } = db.sequelize.models;
const { Likes } = db.sequelize.models;
const { Dislike } = db.sequelize.models;


const auth = require('../middleware/auth');

    //Cherche si le userId est présent dans le tableau passé en paramètre.
    function checkArrayUsers (arrayUsers, userId){
        return arrayUsers.find(id => id === userId);
    };

    //Retourne un nouveau tableau sans l'userId passé en paramètre.
    function newUserArray (arrayUsers, userId){
        return arrayUsers.filter(id => id !== userId)
    };

//--CRUD

    //--CREATE

    // Création d'un like.
    exports.toLike = (req, res, next) => {
        // Comparaison de l'id de l'utilsateur et des userId de la table likes de la BDD.
        // console.log("request", req.body)
        const userId = req.body.userId;
        const like = req.body.like;
        const postId = Post.id
        console.log(postId);
        console.log(Post)

        Likes.findOne({
            where: {
                postId: req.params.id
            }
        })
        .then((res) => {
            console.log(res)
            // Si il n'y a pas match entre le postId et le userId.
            if (like === 1) {
                // let likeUser = checkArrayUsers(res.)
                Likes.create({
                    userId: req.body.userId,
                    postId: req.body.postId
                });
                res.status(201).json({ message: "Like ajouté" });
            }
            // Si il n'y a pas match entre le postId et le userId.
        
        })
        .catch(error => res.status(401).json({ error: error }))
    }