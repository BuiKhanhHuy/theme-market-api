'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentType.hasOne(models.Order, {
        foreignKey: 'paymentTypeId',
        as: 'orders',
      });
    }
  }
  PaymentType.init(
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
      modelName: 'PaymentType',
    }
  );
  return PaymentType;
};
