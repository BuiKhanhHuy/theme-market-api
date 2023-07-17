'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Timelines',
      [
        {
          name: 'Less than 1 month',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '1 - 3 months',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '3 - 6 months',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '6 - 12 months',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'More than 1 year',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Timelines', null, {});
  },
};
