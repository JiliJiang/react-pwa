const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
  {
    text: DataTypes.STRING,
    imageFile: DataTypes.JSON,
  },
  {
    sequelize
  }
);

module.exports = Image;
