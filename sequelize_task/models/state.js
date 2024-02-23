// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports= (DataTypes,sequelize,Model) => {
    class State extends Model {}
    
    State.init({
      // Model attributes are defined here
      StateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stateName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isAlpha: true
        }
      },
      stateCode: {
        type: DataTypes.STRING,
        unique: true,
      },
    //   DistrictId: DataTypes.INTEGER
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'State', // We need to choose the model name
      paranoid: true,
      deletedAt: 'softdelete'
    });
    
    // the defined model is the class itself
    console.log(State === sequelize.models.State); // true
    
    return State;
    
    }