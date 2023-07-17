'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blog.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'author',
      });
    }
  }
  Blog.init(
    {
      slug: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      metaTitle: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      // ForeignKey
      userId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Blog',
    }
  );
  return Blog;
};
