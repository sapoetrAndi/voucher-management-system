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

  Cart.associate = function(models) {
    Cart.belongsTo(models.User, { foreignKey: 'user_id' });
    Cart.belongsTo(models.Product_category, { foreignKey: 'category_id' });
    Cart.belongsTo(models.Product, { foreignKey: 'product_id' });
    Cart.belongsTo(models.Voucher, { targetKey: 'voucher_code', foreignKey: 'voucher_code' });
  };

  return Cart;
}