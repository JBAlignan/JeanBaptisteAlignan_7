// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require('../models/index');
// Importation du modèle Post.
const {
    Post
} = db.sequelize.models;
const {
    User
} = db.sequelize.models;
const fs = require('fs')

const auth = require('../middleware/auth')



//--CRUD

//--CREATE

//--Création d'une publication.
exports.createPost = (req, res, next) => {
    console.log(req.body)
    const post = JSON.parse(req.body.post)
    if (post.imageUrl !== null || post.content.length > 3) {

        const nameImage = req.file ? req.file.filename : undefined
        Post.create({
                userId: post.userId,
                content: post.content,
                imageUrl: nameImage
            })

            .then(post => res.status(201).json(post))
            .catch(error => res.status(401).json({
                error: error
            }))
    }
}

//--READ

//--Trouver toutes les publications.
exports.findAllPosts = (req, res, next) => {
    Post.findAll({
            order: [
                ["createdAt", "DESC"]
            ],
            include: {
                model: User,
                as: 'Author'
            },
        })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({
            error
        }));
}

// Trouver une publication.
exports.findOnePost = (req, res, next) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(post => res.status(200).json({
            post
        }))
        .catch(error => res.status(404).json({
            error
        }))
};

//--UPDATE

//--Mettre à jour une publication.
exports.updatePost = (req, res, next) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((post) => {
            post.update({
                    content: req.body.content,
                    imageUrl: req.body.imageUrl,
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(post => res.status(200).json({
                    post
                }))
                .catch(error => res.status(404).json({
                    error
                }))
        })
        .catch(error => res.status(500).json({
            error
        }))
}

//--DELETE

//--Suppression d'une publication.
exports.deletePost = (req, res, next) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((post) => {
            post.destroy()
        })
        .then(() => res.status(200).json({
            message: 'Publication supprimée'
        }))
        .catch(error => res.status(400).json({
            message: "Non autorisé"
        }))
}