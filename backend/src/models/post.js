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
      // define association here
      
      //Association Post/User, ForeignKey (userId) dans la table User
      Post.belongsTo(models.User, { 
        foreignKey: 'userId' 
      });
      models.User.hasOne(Post)

      //Association Post/Commentaire, foreignKey (postId) dans la table comments.
      Post.hasMany(models.Comments)
      models.Comments.belongsTo(Post, {
        foreignKey: 'postId'
      })

    }
  };

  Post.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    likesCount: DataTypes.INTEGER,
    dislikesCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};