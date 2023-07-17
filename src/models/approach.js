'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Approach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Approach.hasOne(models.Hire, {
        foreignKey: 'approachId',
        as: 'approaches',
      });
    }
  }
  Approach.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Approach',
    }
  );
  return Approach;
};
