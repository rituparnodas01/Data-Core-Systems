const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const AcademicYear = () => {
    return sequelize.define(
        'AcademicYear',
        {
          t_mst_academic_year_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
          },
          year: {
            type: DataTypes.STRING(4),
          },
          code: {
            type: DataTypes.STRING(16),
          },
          label: {
            type: DataTypes.STRING(24),
          },
          from_date: {
            type: DataTypes.DATEONLY,
          },
          end_date: {
            type: DataTypes.DATEONLY,
          },
          is_active: {
            type: DataTypes.ENUM('n', 'y'),
          },
        },
        {
            tableName: 't_mst_academic_years',
            underscored: true,
            timestamps: false
        }
    );
};

module.exports = AcademicYear();