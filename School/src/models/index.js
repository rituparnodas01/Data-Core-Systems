const sequelize = require("../database/db");

const Subject = require("./subject");

(async () => {
  await sequelize.sync({ force: false });
})();
