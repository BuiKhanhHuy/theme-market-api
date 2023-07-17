'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasOne(models.Order, {
        foreignKey: 'productId',
        as: 'orders',
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        targetKey: 'id',
        as: 'category',
      });
      Product.belongsToMany(models.Tag, {
        through: models.ProductTag,
        as: 'tags',
      });
      Product.belongsToMany(models.User, {
        through: models.SavedProduct,
        as: 'savedUsers',
      });
    }
  }
  Product.init(
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
      released: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      demoUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      documentationUrl: {
        type: DataTypes.STRING(500),
        defaultValue: '',
      },
      githubUrl: {
        type: DataTypes.STRING(500),
        defaultValue: '',
      },
      downloadNumber: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      themeVersion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      license: {
        type: DataTypes.STRING(50),
        defaultValue: ""
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      changelogContent: {
        type: DataTypes.TEXT,
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
      categoryId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      productTypeId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
