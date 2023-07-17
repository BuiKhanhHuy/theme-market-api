'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Profession, {
        foreignKey: 'professionId',
        targetKey: 'id',
        as: 'profession',
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      passwordHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      roleName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      professionId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
