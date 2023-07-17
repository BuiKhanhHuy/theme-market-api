'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Professions',
      [
        {
          name: 'Designer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Developer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marketer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Businessman',
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
    await queryInterface.bulkDelete('Professions', null, {});
  },
};
