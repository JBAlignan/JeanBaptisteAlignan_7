'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Association Post/User, ForeignKey (userId) dans la table Post (target).
      Post.belongsTo(models.User, { foreignKey: 'userId' });
      //Association Post/Commentaire, foreignKey (postId) dans la table comments.
      Post.hasMany(models.Comments, { foreignKey: 'postId' })
      //Association Post/User via tables de liaison Likes/Dislikes.
      // Post.belongsToMany(models.User, { through: 'likes' });
      // Post.belongsToMany(models.User, { through: 'dislikes' });
    }
  };

  Post.init({
    userId: {
     type: DataTypes.INTEGER,
    //  allowNull: false
    },
    content: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    likesCount: DataTypes.INTEGER,
    dislikesCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};