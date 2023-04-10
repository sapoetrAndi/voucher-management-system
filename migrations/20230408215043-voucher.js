'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('vouchers', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
  
      voucher_code: {
        type : Sequelize.STRING,
        allowNull : false,
        unique: true
      },
  
      voucher_name: {
        type : Sequelize.STRING,
        allowNull : false
      },
  
      discount: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      voucher_expired: {
        type: Sequelize.DATE,
        allowNull : false
      },
  
      createdAt: {
        type: Sequelize.DATE,
        allowNull : false
      },
  
      updatedAt: {
        type: Sequelize.DATE,
        allowNull : false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('vouchers');
  }
};
