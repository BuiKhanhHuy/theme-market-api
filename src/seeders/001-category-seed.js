'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'E-Commerce',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Agency',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Saas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Business',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Others',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Blog',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Portfolio',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
