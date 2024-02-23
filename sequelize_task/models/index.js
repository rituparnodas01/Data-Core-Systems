const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlz', 'root', '', {
  host: 'localhost',
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


db.state = require("./state")(DataTypes, sequelize, Model)
db.district = require("./district")(DataTypes, sequelize, Model)
db.town = require("./town")(DataTypes, sequelize, Model)
db.user = require("./user")(DataTypes, sequelize, Model)

db.state.hasOne(db.district);
db.district.belongsTo(db.state,{foreignKey: 'SateId'});

db.district.hasOne(db.town);
db.town.belongsTo(db.district,{foreignKey: 'DistrictId'});

db.town.hasOne(db.user);
db.user.belongsTo(db.town,{foreignKey: 'TownId'});

db.sequelize.sync({ force: false });
module.exports = db