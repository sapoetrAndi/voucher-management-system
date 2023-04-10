module.exports = (sequelize, DataTypes) => {
  const User_voucher = sequelize.define('User_voucher', {
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

    voucher_code: {
      type : DataTypes.STRING,
      allowNull : false
    },

    category_id: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    claim_date: {
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
    tableName: 'user_vouchers'
  });

  User_voucher.associate = function(models) {
    User_voucher.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  // User_voucher.associate = function(models) {
  //   User_voucher.belongsTo(models.Product_category, { foreignKey: 'category_id' });
  // };

  // User_voucher.associate = function(models) {
  //   User_voucher.belongsTo(models.Voucher, { foreignKey: 'voucher_code' });
  // };
  return User_voucher;
}