module.exports = (DataTypes, sequelize) => {
    const Address = sequelize.define('address', {
      // Model attributes are defined here
      AddressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Address: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      UserId : DataTypes.INTEGER,
      CartId : DataTypes.INTEGER
    }, {
      // Other model options go here
      //   tableName: 'educations',
      // timestamps: false
      sequelize, // We need to pass the connection instance
      modelName: 'Address', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return Address;
  
  }