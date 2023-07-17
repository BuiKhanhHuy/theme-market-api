'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Approaches',
      [
        {
          name: 'Search Engine (Google, Bing, etc.)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Github',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Social Media',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Email',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Developer Forum',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Blog Post',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I'm Your Template User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Colleague / Friend',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Other',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Approaches', null, {});
  },
};
