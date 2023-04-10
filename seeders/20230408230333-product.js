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
    await queryInterface.bulkInsert('products', [
      {
        category_id: 1,
        nama_product: 'Susu UHT',
        price: 20000.0,
        stock: 100,
        expired_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_id: 2,
        nama_product: 'Kopi Hitam',
        price: 25000.0,
        stock: 150,
        expired_date: new Date(),
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
