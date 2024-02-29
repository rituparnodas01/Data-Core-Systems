module.exports = (DataTypes, sequelize) => {
    const Address = sequelize.define('address', {
      // Model attributes are defined here
      AddressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Full_Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },Pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },State: {
        type: DataTypes.STRING,
        allowNull: false
      },City: {
        type: DataTypes.STRING,
        allowNull: false
      },House_No: {
        type: DataTypes.STRING,
        allowNull: false
      },Road_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      UserId : DataTypes.INTEGER,
      // CartId : DataTypes.INTEGER
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