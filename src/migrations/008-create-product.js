'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      slug: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
      },
      metaTitle: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      released: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      subTitle: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      demoUrl: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      documentationUrl: {
        type: Sequelize.STRING(500),
        defaultValue: '',
      },
      githubUrl: {
        type: Sequelize.STRING(500),
        defaultValue: '',
      },
      downloadNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      themeVersion: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      license: {
        type: Sequelize.STRING(50),
        defaultValue: ""
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      changelogContent: {
        type: Sequelize.TEXT,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      // ForeignKey
      categoryId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'Categories', 
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
