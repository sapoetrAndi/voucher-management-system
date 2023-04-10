module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
  
      user_id: {
        type : DataTypes.INTEGER,
        allowNull : false
      },
  
      payment_method_id: {
        type : DataTypes.INTEGER,
        allowNull : false
      },
  
      total_order: {
        type : DataTypes.DOUBLE,
        allowNull : false
      },
  
      order_date: {
        type: DataTypes.DATE,
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
    tableName: 'orders'
  });

  return Order;
}