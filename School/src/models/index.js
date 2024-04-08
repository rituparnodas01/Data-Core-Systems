const sequelize = require("../database/db");

const Section = require("./Section");

(async () => {
  await sequelize.sync({ force: false });
})();
