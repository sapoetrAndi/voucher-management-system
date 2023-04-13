module.exports = (sequelize, DataTypes) => {
  const Shipping_information = sequelize.define('Shipping_information', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    order_id: {
      type : DataTypes.INTEGER,
      allowNull : false
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

    voucher_code: {
      type : DataTypes.STRING,
      allowNull : true
    },

    voucher_name: {
      type : DataTypes.STRING,
      allowNull : true
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
    tableName: 'shipping_informations'
  });

  Shipping_information.associate = function(models) {
    Shipping_information.belongsTo(models.Order, { foreignKey: 'order_id' });
  };

  return Shipping_information;
}