'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'EstimateBudgets',
      [
        {
          name: 'Less than $3,000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '$3000 - $5000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '$5000 - $10000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '$10000 - $20000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '$20000 - $50000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '$50,000+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EstimateBudgets', null, {});
  },
};
