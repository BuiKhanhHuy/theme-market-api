'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
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
      description: {
        type: Sequelize.STRING(512),
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
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
      userId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Blogs');
  },
};
