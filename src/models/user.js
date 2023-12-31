'use strict';
import bcrypt from 'bcryptjs';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Order, {
        foreignKey: 'userId',
        as: 'orders',
      });
      User.hasOne(models.Blog, {
        foreignKey: 'userId',
        as: 'blogs',
      });
      User.belongsTo(models.Profession, {
        foreignKey: 'professionId',
        targetKey: 'id',
        as: 'profession',
      });
      User.belongsToMany(models.Product, {
        through: models.SavedProduct,
        as: 'savedProducts',
      });
    }

    static beforeCreate(user) {
      if (user.password) {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }

    static beforeUpdate(user) {
      if (user.password) {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
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
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      hooks: {
        beforeCreate: User.beforeCreate,
        beforeUpdate: User.beforeUpdate,
      }
    }
  );
  return User;
};
