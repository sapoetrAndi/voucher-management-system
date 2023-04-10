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

    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email:{
        type : Sequelize.STRING,
        allowNull : false,
        unique: true,
        isEmail:true,
        min: 2
      },
  
      password:{
        type : Sequelize.STRING,
        allowNull : false,
        min: 6
      },
  
      name:{
        type : Sequelize.STRING,
        allowNull : false,
        min: 2
      },
  
      address:{
        type : Sequelize.STRING,
        allowNull : false,
        min: 3
      },
  
      contact:{
        type : Sequelize.STRING,
        min: 2
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

    await queryInterface.dropTable('users');
  }
};
