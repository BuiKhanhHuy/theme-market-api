'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductTypes',
      [
        {
          name: 'NextJs Templates',
          description: 'Best NextJs Templates',
          iconUrl: 'https://themefisher.com/images/icons/nextjs.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Astro Themes',
          description: 'Best Astro Themes',
          iconUrl: 'https://themefisher.com/images/icons/astro.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hugo Themes',
          description: 'Remarkable Hugo Themes',
          iconUrl: 'https://themefisher.com/images/icons/hugo.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jekyll Themes',
          description: 'Best Jekyll Themes',
          iconUrl: 'https://themefisher.com/images/icons/jekyll.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bootstrap Templates',
          description: 'Download Bootstrap Templates',
          iconUrl: 'https://themefisher.com/images/icons/bootstrap.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tailwind Templates',
          description: 'Download Tailwind Templates',
          iconUrl: 'https://themefisher.com/images/icons/tailwind.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bulma Templates',
          description: 'Download Bulma Templates',
          iconUrl: 'https://themefisher.com/images/icons/bulma.svg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTypes', null, {});
  },
};
