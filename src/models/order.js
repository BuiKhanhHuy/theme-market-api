'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.PaymentType, {
        foreignKey: 'paymentTypeId',
        targetKey: 'id',
        as: 'paymentType',
      });
      Order.belongsTo(models.PaymentStatus, {
        foreignKey: 'paymentStatusId',
        targetKey: 'id',
        as: 'paymentStatus',
      });
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'user',
      });
      Order.belongsTo(models.Product, {
        foreignKey: 'productId',
        targetKey: 'id',
        as: 'product',
      });
    }
  }
  Order.init(
    {
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
      },
      // ForeignKey
      paymentTypeId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      paymentStatusId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      productId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
