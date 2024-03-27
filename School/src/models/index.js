const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('tffs', 'root', '', {
  host: 'localhost',
//   port: 3307,
  logging: true,
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.user = require("./user")(DataTypes, sequelize, Model)


db.sequelize.sync({ force: false });

module.exports = db