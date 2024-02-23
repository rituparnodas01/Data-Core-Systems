// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports= (DataTypes,sequelize) => {
    const Detail = sequelize.define('Details', {
      // Model attributes are defined here
      fathersname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mothername: {
        type: DataTypes.STRING,
        allowNull: true
        // defaultValue: permanent_address
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
      tableName: 'Details',
      timestamps: false
    
    });
    
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
    
    return Detail;
    
    }