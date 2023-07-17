'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hire.belongsTo(models.ServicePackage, {
        foreignKey: 'servicePackageId',
        targetKey: 'id',
        as: 'servicePackage',
      });
      Hire.belongsTo(models.ProductType, {
        foreignKey: 'productTypeId',
        targetKey: 'id',
        as: 'productType',
      });
      Hire.belongsTo(models.EstimateBudget, {
        foreignKey: 'estimateBudgetId',
        targetKey: 'id',
        as: 'estimateBudget',
      });
      Hire.belongsTo(models.Timeline, {
        foreignKey: 'timelineId',
        targetKey: 'id',
        as: 'timeline',
      });
      Hire.belongsTo(models.Approach, {
        foreignKey: 'approachId',
        targetKey: 'id',
        as: 'approach',
      });
    }
  }
  Hire.init(
    {
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      roleName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING(255),
        defaultValue: '',
      },
      websiteUrl: {
        type: DataTypes.STRING(500),
        defaultValue: '',
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isContacted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      // ForeignKey
      servicePackageId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      productTypeId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      estimateBudgetId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      timelineId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      approachId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Hire',
    }
  );
  return Hire;
};
