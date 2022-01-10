// Importation de l'ORM Sequelize et des schémas de données nécessaires
const User = require('../models/users');
const Sequelize = db.Sequelize
//Importation de bcrypt pour le hashage du mot de passe.
const bcrypt = require('bcrypt');
// Importation du package jsonwebtoken pour la création et la vérification des tokens
const jwt = require('jsonwebtoken')


// Enregistrement d'un nouveau utilisateur.
    exports.signup = (req, res, next) => {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                    .catch(error => res.status(400).json({ error }))
            })
            .catch(error => res.status(500).json({ error }));
    };

//Connection d'un utilisateur.
    exports.login = (req, res, next) => {
        User.findOne({ email: req.body.email }) //Recherche de l'email dans la BDD.
            .then(user => {
                if (!user){ //Si l'email n'est pas trouvé.
                    return res.status(401).json({ error: 'Utilisateur inconnu' });
                }
                bcrypt.compare(req.body.password, user.password) //Si email trouvé, comparaison des hash des mots de passe.
                    .then(valid => {
                        if (!valid){ //Si échec de la comparaison.
                            return res.status(401).json({ error: 'Mot de passe incorrect' });
                        }
                        res.status(200).json({ //Si valide, retour de l'id de l'utilisateur et d'un token.
                            userId: user._id,
                            token: jwt.sign( //Fonction sign encode un nouveau token.
                                { userId: user._id }, //Token contient l'ID en tant que payload.
                                'RANDOM_TOKEN_SECRET',  //Chaine secrète pour encoder le token.
                                { expiresIn: '24h' }    //Durée de validité du token.
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error }))
            })
            .catch(error => res.status(500).json({ error }));
    };
