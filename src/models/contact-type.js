'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContactType.hasOne(models.Contact, {
        foreignKey: 'contactTypeId',
        as: 'contactTypes',
      });
    }
  }
  ContactType.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'ContactType',
    }
  );
  return ContactType;
};
