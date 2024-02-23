const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('blogapp', 'root', '', {
  host: 'localhost',
  port: 3307,
//   logging: true,
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
db.blog = require("./blog")(DataTypes, sequelize, Model)

// db.user.hasOne(db.blog);
// db.blog.belongsTo(db.user);

// db.user.hasOne(db.blog, {foreignKey: 'UserId'});
db.blog.belongsTo(db.user, {foreignKey: 'UserId'});

// db.user.sync({ force: false });
// db.blog.sync({ force: false });
db.sequelize.sync({ force: false });
module.exports = db


// , {foreignKey: 'UserId'}