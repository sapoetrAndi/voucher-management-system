module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    category_id: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    nama_product: {
      type : DataTypes.STRING,
      allowNull : false
    },

    price: {
      type : DataTypes.DOUBLE,
      allowNull : false
    },

    stock: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    expired_date: {
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
    tableName: 'products'
  });

  return Product;
}