'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      // ForeignKey
      paymentTypeId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'PaymentTypes',
          key: 'id',
        },
      },
      paymentStatusId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'PaymentStatuses',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
