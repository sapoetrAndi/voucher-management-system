module.exports = (sequelize, DataTypes) => {
  const Product_category = sequelize.define('Product_category', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    category_name: {
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
    tableName: 'product_categories'
  });

  Product_category.associate = function(models) {
    Product_category.hasMany(models.User_voucher, { foreignKey: 'category_id' });
  };

  return Product_category;
}