module.exports = (DataTypes, sequelize) => {
    const Cart = sequelize.define('cart', {
      // Model attributes are defined here
      CartId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Product_description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      Product_image: {
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
      modelName: 'Cart', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return Cart;
  
  }