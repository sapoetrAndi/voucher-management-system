module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email:{
      type : DataTypes.STRING,
      allowNull : false,
      unique: true,
      isEmail:true,
      min: 2
    },

    password:{
      type : DataTypes.STRING,
      allowNull : false,
      min: 6
    },

    name:{
      type : DataTypes.STRING,
      allowNull : false,
      min: 2
    },

    address:{
      type : DataTypes.STRING,
      allowNull : false,
      min: 3
    },

    contact:{
      type : DataTypes.STRING,
      min: 2
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
    tableName: 'users'
  });

  User.associate = function(models) {
    User.hasMany(models.User_voucher, { foreignKey: 'user_id' });
    User.hasMany(models.Cart, { foreignKey: 'user_id' });
  };
  return User;
}