const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const AcademicDetails = () => {
    return sequelize.define(
        'AcademicDetails',
        {
          t_rel_academic_details_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          t_mst_client_id: {
            type: DataTypes.INTEGER,
          },
          t_mst_academic_year_id: {
            type: DataTypes.INTEGER,
          },
          t_rel_class_id: {
            type: DataTypes.INTEGER,
          },
          t_rel_subject_id: {
            type: DataTypes.INTEGER,
          },
          t_rel_academic_category_first_id: {
            type: DataTypes.INTEGER,
          },
          t_rel_academic_category_second_id: {
            type: DataTypes.INTEGER,
          },
          full_marks: {
            type: DataTypes.DECIMAL(10, 2),
          },
          display_status: {
            type: DataTypes.ENUM('grade', 'marks', 'both'),
            defaultValue: 'both',
          },
          created_by: {
            type: DataTypes.INTEGER,
          },
          updated_by: {
            type: DataTypes.INTEGER,
          },
        },
        {
            tableName: 't_rel_academic_details',
            underscored: true,
            timestamps: false
        }
    );
};

module.exports = AcademicDetails();