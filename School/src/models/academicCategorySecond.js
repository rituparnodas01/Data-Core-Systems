const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const AcademicCategorySecond = () => {
  return sequelize.define(
    'AcademicCategorySecond',
    {
      t_rel_academic_category_second_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 't_rel_academic_category_second',
      underscored: true,
    }
  );
};

module.exports = AcademicCategorySecond();

