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
    await queryInterface.createTable('products', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
  
      category_id: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      nama_product: {
        type : Sequelize.STRING,
        allowNull : false
      },
  
      price: {
        type : Sequelize.DOUBLE,
        allowNull : false
      },
  
      stock: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  
      expired_date: {
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
    await queryInterface.dropTable('products');
  }
};
