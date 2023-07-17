'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PaymentStatuses',
      [
        {
          name: 'Momo',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'PayPal',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentStatuses', null, {});
  },
};
