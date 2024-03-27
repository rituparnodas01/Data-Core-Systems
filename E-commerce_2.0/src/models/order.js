module.exports = (DataTypes, sequelize) => {
    const Order = sequelize.define('order', {
      // Model attributes are defined here
      OrderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Order_status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      UserId : DataTypes.INTEGER,
      AddressId: DataTypes.INTEGER,
      // ProductId: DataTypes.INTEGER,
      id: DataTypes.INTEGER,
    }, {
      // Other model options go here
      //   tableName: 'educations',
      // timestamps: false
      sequelize, // We need to pass the connection instance
      modelName: 'Order', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return Order;
  
  }