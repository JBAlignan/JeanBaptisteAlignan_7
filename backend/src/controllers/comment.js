// Importation de l'ORM Sequelize et des schémas de données nécessaires
const {db, Post, Comments} = require('../models/index');
// Importation du modèle Comment.




//--CRUD

    //--CREATE

    //--Création d'un commentaire.
    exports.createComment = (req, res, next) => {       
        Post.findOne({ where: { id: req.body.postId } })
        .then(() => 
            Comments.create({
                userId: req.body.userId,
                postId: req.body.postId,
                content: req.body.comment,
            }))
        .then(comment => res.status(201).json(comment))
        .catch(error => (res.status(401).json({ error: error })))
    }

    //--READ

    //--Trouver toutes les publications.
    exports.findAllComments = (req, res, next) => {
        Comments.findAll(
            {
                where: { postId: req.params.postId },
                include: [{ all: true, nested: true }]
            }
        )
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
    }

    // Trouver une publication.
    exports.findOneComment = (req, res, next) => {
        Comments.findOne({ where: { id: req.params.id } })
        .then (comment => res.status(200).json({ comment }))
        .catch (error => res.status(404).json({ error }))
    };

    //--UPDATE

    //Mettre à jour une publication.
    exports.updateComment = (req, res, next) => {
        Comments.findOne({ where: { id: req.params.id } })
        .then((comment) => {
            comment.update({
                content: req.body.content,
            },
            { where: {
                id: req.params.id
                }
            })
            .then (post => res.status(200).json({ post }))
            .catch (error => res.status(404).json({ error }))
            }
        )
        .catch (error => res.status(500).json({ error }))
    }

    //--DELETE

    //--Suppression d'un commentaire.
    exports.deleteComment = (req, res, next) => {
        Comments.findOne({ where: { id: req.params.id } })
        .then((comment)=> {
            comment.destroy()
        })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
        .catch (error => res.status(400).json({ error }))
    }