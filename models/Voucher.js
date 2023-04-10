module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false
    },

    voucher_code: {
      type : DataTypes.STRING,
      allowNull : false,
      unique: true
    },

    voucher_name: {
      type : DataTypes.STRING,
      allowNull : false
    },

    discount: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    voucher_expired: {
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
    tableName: 'vouchers'
  });

  // Voucher.associate = function(models) {
  //   Voucher.hasMany(models.User_voucher, { foreignKey: 'voucher_code' });
  // };

  return Voucher;
}