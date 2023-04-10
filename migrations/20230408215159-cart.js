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
    await queryInterface.createTable('carts', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
  
      voucher_code: {
        type : Sequelize.STRING,
        allowNull : true
      },
  
      voucher_name: {
        type : Sequelize.STRING,
        allowNull : true
      },
  
      category_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      user_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      product_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      quantity: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      
      price: {
        type : Sequelize.DOUBLE,
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
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('carts');
  }
};
