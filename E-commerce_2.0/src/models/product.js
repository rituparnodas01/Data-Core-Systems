const { INTEGER } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
    const Product = sequelize.define('product', {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      colors: {
        type: DataTypes.STRING,
        allowNull: false
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false
      },
      featured: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stock: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      price: {
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