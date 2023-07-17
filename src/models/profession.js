'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profession.hasOne(models.User, {
        foreignKey: 'professionId',
        as: 'users',
      });
    }
  }
  Profession.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Profession',
    }
  );
  return Profession;
};
