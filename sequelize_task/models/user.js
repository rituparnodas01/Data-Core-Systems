// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports= (DataTypes,sequelize,Model) => {
    class User extends Model {}
    
    User.init({
      // Model attributes are defined here
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isAlpha: true
        }
      },
      userCode: {
        type: DataTypes.STRING,
        unique: true,
      },
      TownId: DataTypes.INTEGER
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'User', // We need to choose the model name
      paranoid: true,
      deletedAt: 'softdelete'
    });
    
    // the defined model is the class itself
    console.log(User === sequelize.models.User); // true
    
    return User;
    
    }