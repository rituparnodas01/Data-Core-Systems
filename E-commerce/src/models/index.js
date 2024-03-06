const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('flipzon', 'root', '', {
  host: 'localhost',
//   port: 3307,
  logging: true,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
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

db.user = require("./user")(DataTypes, sequelize, Model)
db.product = require("./product")(DataTypes, sequelize, Model)
db.cart = require("./cart")(DataTypes, sequelize, Model)
db.order = require("./order")(DataTypes, sequelize, Model)
db.address = require("./address")(DataTypes, sequelize, Model)
db.seller = require("./seller")(DataTypes, sequelize, Model)

db.product.belongsTo(db.seller, {foreignKey: 'SellerId'});
db.cart.belongsTo(db.user, {foreignKey: 'UserId'});
db.cart.belongsTo(db.product, {foreignKey: 'ProductId'});
db.order.belongsTo(db.user, {foreignKey: 'UserId'});
db.order.belongsTo(db.product, {foreignKey: 'ProductId'});
// db.order.belongsTo(db.cart, {foreignKey: 'CartId'});
db.order.belongsTo(db.address, {foreignKey: 'AddressId'});
db.address.belongsTo(db.user, {foreignKey: 'UserId'});

// db.product.sync({ force: true });

db.sequelize.sync({ force: true });

module.exports = db