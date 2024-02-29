module.exports = (DataTypes, sequelize) => {
    const Cart = sequelize.define('cart', {
      // Model attributes are defined here
      CartId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Total_items: {
        type: DataTypes.STRING,
        allowNull: false
      },
      UserId : DataTypes.INTEGER,
      ProductId : DataTypes.INTEGER
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