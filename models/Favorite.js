const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// const UserModel = require('./UserModel');

class Favorite extends Model {}
Favorite.init(
  {
    //1. ID COLUMN
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    //2. CUISINE COLUMN
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //3. PRICE COLUMN
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //VALIDATES IF IT IS A DECIMAL
      validate: {
        isDecimal: true
      }
    },

    //4. RATING COLUMN
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //VALIDATES IF IT IS A DECIMAL
      validate: {
        isDecimal: true
      }
    },

    //5. USER-ID COLUMN
    user_id: {
      type: DataTypes.INTEGER,
      //references the user model's id
      references:{
        model: 'user',
        key: 'id'
      }
    },

    // // DEFINE IMAGE URL
    // image_url: {
    //   type: DataTypes.STRING
    // },

    // // DEFINE IMAGE
    // image: {
    //   type: DataTypes.STRING
    // },

    // // DEFINE NAME
    // name: {
    //   type: DataTypes.STRING
    // }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite;


