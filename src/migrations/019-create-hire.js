'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      roleName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      companyName: {
        type: Sequelize.STRING(255),
        defaultValue: '',
      },
      websiteUrl: {
        type: Sequelize.STRING(500),
        defaultValue: '',
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isContacted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      servicePackageId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'ServicePackages',
          key: 'id',
        },
      },
      productTypeId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'ProductTypes',
          key: 'id',
        },
      },
      estimateBudgetId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'EstimateBudgets',
          key: 'id',
        },
      },
      timelineId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'Timelines',
          key: 'id',
        },
      },
      approachId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'Approaches',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hires');
  },
};
