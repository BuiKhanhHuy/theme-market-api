'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Timeline.hasOne(models.Hire, {
        foreignKey: 'timelineId',
        as: 'timelines',
      });
    }
  }
  Timeline.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Timeline',
    }
  );
  return Timeline;
};
