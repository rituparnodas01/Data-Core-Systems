const sequelize = require("../database/db");

const Subject = require("./subject");
const SubjectType = require("./subjectType");
const Section = require("./Section");

(async () => {
  await sequelize.sync({ force: false });
})();
