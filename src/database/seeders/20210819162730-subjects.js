'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Subjects',
      [
        {
          subject_name: 'Maths',
          level_name: 'Primary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: 'Physics',
          level_name: 'Primary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: 'English',
          level_name: 'Secondary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: 'Biology',
          level_name: 'Tertiary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subjects', null, {});
  },
};
