'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PaymentStatuses',
      [
        {
          name: 'Paid',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Unpaid',
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
