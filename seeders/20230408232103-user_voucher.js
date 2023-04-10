'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_vouchers', [
      {
        user_id: 1,
        voucher_code: 'lbrn01',
        category_id: 15,
        claim_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        voucher_code: 'hutri23',
        category_id: 16,
        claim_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        voucher_code: 'lbrn01',
        category_id: 15,
        claim_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        voucher_code: 'hutri23',
        category_id: 16,
        claim_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('user_vouchers', null, {});
  }
};
