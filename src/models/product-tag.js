'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductTag.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
      ProductTag.belongsTo(models.Tag, { foreignKey: 'tagId', as: 'tag' });
    }
  }
  ProductTag.init(
    {
      productId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProductTag',
    }
  );
  return ProductTag;
};
