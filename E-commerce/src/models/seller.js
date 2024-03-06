module.exports = (DataTypes, sequelize) => {
    const Seller = sequelize.define('seller', {
      // Model attributes are defined here
      SellerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Seller_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Seller_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      confirmPassword: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      // blog_id : DataTypes.INTEGER
    }, {
      // Other model options go here
      //   tableName: 'educations',
      // timestamps: false
      sequelize, // We need to pass the connection instance
      modelName: 'Seller', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return Seller;
  
  }