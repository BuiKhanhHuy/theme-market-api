'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ServicePackages',
      [
        {
          name: 'Complete Website Development',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Theme Customization',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Custom Theme Development',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Website Redesign',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Website Migration',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Website Maintenance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CMS Setup',
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
    await queryInterface.bulkDelete('ServicePackages', null, {});
  },
};
