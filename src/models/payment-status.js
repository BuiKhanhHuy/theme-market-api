'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentStatus.hasOne(models.Order, {
        foreignKey: 'paymentStatusId',
        as: 'orders',
      });
    }
  }
  PaymentStatus.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(255),
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'PaymentStatus',
    }
  );
  return PaymentStatus;
};
