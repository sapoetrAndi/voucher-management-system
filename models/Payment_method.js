module.exports = (sequelize, DataTypes) => {
  const Payment_method = sequelize.define('Payment_method', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    name: {
      type : DataTypes.STRING,
      allowNull : false
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull : false
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull : false
    }
  },{
    tableName: 'payment_methods'
  });

  return Payment_method;
}