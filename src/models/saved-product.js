'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SavedProduct.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
      SavedProduct.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  SavedProduct.init(
    {
      productId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SavedProduct',
    }
  );
  return SavedProduct;
};
