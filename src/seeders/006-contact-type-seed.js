'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ContactTypes',
      [
        {
          name: 'Theme Support',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pre Sales Questions',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Custom Development Services',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Payment Problem',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Others',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ContactTypes', null, {});
  },
};
