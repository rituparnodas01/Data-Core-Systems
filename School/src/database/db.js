const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tffs', 'root', '', {
  host: 'localhost',
  logging: true,
  dialect: 'mysql'
});

(async () => {
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
