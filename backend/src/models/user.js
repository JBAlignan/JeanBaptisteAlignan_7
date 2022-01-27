'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Association User/Post, ForeignKey (userId) dans la table Post (target).
      User.hasMany(models.Post, { foreignKey: 'userId' });
      //Association User/Post via tables de liaison Likes/Dislikes.
      // User.belongsToMany(models.Post, { through: 'likes' });
      // User.belongsToMany(models.Post, { through: 'dislikes' });
    }
  };

  User.init({
    firstName: {
     type: DataTypes.STRING,
     allowNull: false
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};