'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstimateBudget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstimateBudget.hasOne(models.Hire, {
        foreignKey: 'estimateBudgetId',
        as: 'estimateBudgets',
      });
    }
  }
  EstimateBudget.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'EstimateBudget',
    }
  );
  return EstimateBudget;
};
