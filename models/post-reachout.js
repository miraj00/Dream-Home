const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}


Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      yourName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
        },
  
      message_body: {
      type: DataTypes.TEXT,
       allowNull: false,   
        },
  
    
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;