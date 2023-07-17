'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicePackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServicePackage.hasOne(models.Hire, {
        foreignKey: 'servicePackageId',
        as: 'servicePackages',
      });
    }
  }
  ServicePackage.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'ServicePackage',
    }
  );
  return ServicePackage;
};
