module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    voucher_code: {
      type : DataTypes.STRING,
      allowNull : true
    },

    voucher_name: {
      type : DataTypes.STRING,
      allowNull : true
    },

    category_id: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    user_id: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    product_id: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    quantity: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    
    price: {
      type : DataTypes.DOUBLE,
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
    tableName: 'carts'
  });

  return Cart;
}