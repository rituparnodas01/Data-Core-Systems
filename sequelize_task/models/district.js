// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require("./sequelize")

const { INTEGER } = require("sequelize");

module.exports= (DataTypes,sequelize,Model) => {
    class District extends Model {}
    
    District.init({
      // Model attributes are defined here
      DistrictId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      districtName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          isAlpha: true
        }
      },
      districtCode: {
        type: DataTypes.STRING,
        unique: true,
      },
      StateId: DataTypes.INTEGER
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'District', // We need to choose the model name
      paranoid: true,
      deletedAt: 'softdelete'
    });
    
    // the defined model is the class itself
    console.log(District === sequelize.models.District); // true
    
    return District;
    
    }