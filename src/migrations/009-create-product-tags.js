'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      productId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Products',
          key: 'id',
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',  
      },
      tagId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',  
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductTags');
  },
};
