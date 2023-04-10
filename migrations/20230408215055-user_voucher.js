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

    await queryInterface.createTable('user_vouchers', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
  
      user_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      voucher_code: {
        type : Sequelize.STRING,
        allowNull : false
      },
  
      category_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      claim_date: {
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
    await queryInterface.dropTable('user_vouchers');
  }
};
