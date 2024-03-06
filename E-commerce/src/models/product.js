const { INTEGER } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
    const Product = sequelize.define('product', {
      // Model attributes are defined here
      ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Product_catagory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Product_description: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true
      },
      Product_image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Stock: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      Price: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      SellerId: DataTypes.INTEGER,
      // blog_id : DataTypes.INTEGER
    }, {
      // Other model options go here
      //   tableName: 'educations',
      // timestamps: false
      sequelize, // We need to pass the connection instance
      modelName: 'Product', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return Product;
  
  }