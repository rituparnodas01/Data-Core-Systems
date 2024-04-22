const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const AcademicCategoryFirst = () => {
  return sequelize.define(
    'AcademicCategoryFirst',
    {
      t_rel_academic_category_first_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: 't_rel_academic_category_first',
      underscored: true,
    }
  );
};

module.exports = AcademicCategoryFirst();