// Importation de l'ORM Sequelize et des schémas de données nécessaires
const db = require("../models/index")
// Importation du modèle User.
const { User } = db.sequelize.models
// Importation de bcrypt pour le hashage du mot de passe.
const bcrypt = require("bcrypt")
// Importation du package jsonwebtoken pour la création et la vérification des tokens
const jwt = require("jsonwebtoken")

//--CRUD

//--CREATE

// Enregistrement d'un nouveau utilisateur.
exports.signup = (req, res, next) => {
  console.log(req.body)
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        admin: req.body.admin,
      })
        .then((user) => res.status(201).json(user))
        .catch((error) => res.status(401).json({ error: error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

//--READ

// Connection d'un utilisateur.
exports.login = (req, res, next) => {
  //Recherche de l'email dans la BDD; Utilisation de l'option { where } (Sequelize) pour filtrer les requêtes.
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        //Si l'email n'est pas trouvé.
        return res.status(401).json({ error: "Adresse email inconnue" })
      }
      bcrypt
        .compare(req.body.password, user.password) //Si email trouvé, comparaison des hash des mots de passe.
        .then((valid) => {
          if (!valid) {
            //Si échec de la comparaison.
            return res.status(401).json({ error: "Mot de passe incorrect" })
          }
          res.status(200).json({
            //Si valide, retour de l'id de l'utilisateur et d'un token.
            userId: user.id,
            token: jwt.sign(
              //Fonction sign encode un nouveau token.
              { userId: user.id }, //Token contient l'ID en tant que payload.
              `${process.env.TOKEN_KEY}`, //Chaine secrète pour encoder le token.
              { expiresIn: "24h" } //Durée de validité du token.
            ),
          })
        })
        .catch((error) => res.status(500).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

// Trouver un utilisateur.
exports.findUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(404).json({ error }))
}

// Trouver tous les utilisateurs.
exports.findAllUsers = (req, res, next) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }))
}

//--UPDATE

// Mise à jour d'un compte utilisateur.
exports.updateUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() =>
          res.status(200).json({ message: "Profil modifié avec succès" })
        )
        .catch((error) => res.status(400).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

//--DELETE

//Suppression d'un compte utilisateur.
exports.deleteUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      user
        .destroy({
          where: { id: req.params.id },
        })
        .then(() => res.status(200).json({ message: "Compte supprimé" }))
        .catch((error) => res.status(400).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}
