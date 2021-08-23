'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Standards',
      [
        {
          standard_name: '1st standard',
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 9,
        },
        {
          standard_name: '2nd standard',
          subject_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 7,
        },
        {
          standard_name: '12th standard',
          subject_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 5,
        },
        {
          standard_name: '9th standard',
          subject_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 3,
        },
        {
          standard_name: '10th standard',
          subject_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 1,
        },
        {
          standard_name: '4th standard',
          subject_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          ncea_code: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Standards', null, {});
  },
};
