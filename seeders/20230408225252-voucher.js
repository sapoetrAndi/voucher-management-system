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

    await queryInterface.bulkInsert('vouchers', [
      {
        voucher_code: 'lbrn01',
        voucher_name: 'Promo Lebaran',
        discount: 10,
        voucher_expired: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        voucher_code: 'hutri23',
        voucher_name: 'Promo Kemerdekaan',
        discount: 15,
        voucher_expired: new Date(),
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

    await queryInterface.bulkDelete('vouchers', null, {});
  }
};
