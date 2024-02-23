const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', '', {
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


db.user = require("./user")(DataTypes, sequelize, Model)
db.contact = require("./contact")(DataTypes, sequelize)
db.education = require("./education")(DataTypes, sequelize)

// db.user.hasOne(db.contact);

db.user.hasMany(db.contact,);
db.contactUser = db.contact.belongsTo(db.user,{as: 'users'});

db.user.hasMany(db.education,);
db.education.belongsTo(db.user,);

// db.user.hasMany(db.education,{foreignkey: 'UserId'});
// db.education.belongsTo(db.user,{foreignkey: 'UserId'});

// db.user.belongsToMany(db.contact, { through: 'user_contacts' });
// db.contact.belongsToMany(db.user, { through: 'user_contacts' });

db.sequelize.sync({ force: false });
module.exports = db