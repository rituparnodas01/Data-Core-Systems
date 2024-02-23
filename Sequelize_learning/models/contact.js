// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports = (DataTypes, sequelize) => {
  const Contact = sequelize.define('contacts', {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_address: {
      type: DataTypes.STRING,
      // defaultValue: permanent_address
      // allowNull defaults to true
    },
    UserId: DataTypes.INTEGER
  }, {
    // Other model options go here
    tableName: 'contacts',
    // timestamps: false

  });

  // // `sequelize.define` also returns the model
  // console.log(User === sequelize.models.User); // true

  return Contact;

}