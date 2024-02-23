// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports= (DataTypes,sequelize,Model) => {
    class Town extends Model {}
    
    Town.init({
      // Model attributes are defined here
      TownId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      townName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isAlpha: true
        }
      },
      townCode: {
        type: DataTypes.STRING,
        unique: true,
      },
      DistrictId: DataTypes.INTEGER
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Town', // We need to choose the model name
      paranoid: true,
      deletedAt: 'softdelete'
    });
    
    // the defined model is the class itself
    console.log(Town === sequelize.models.Town); // true
    
    return Town;
    
    }