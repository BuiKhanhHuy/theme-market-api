'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductType.hasOne(models.Product, {
        foreignKey: 'productTypeId',
        as: 'products',
      });
      ProductType.hasOne(models.Hire, {
        foreignKey: 'productTypeId',
        as: 'hires',
      });
    }
  }
  ProductType.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      iconUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProductType',
    }
  );
  return ProductType;
};
