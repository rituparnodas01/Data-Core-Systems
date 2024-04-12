const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Grade = () => {
    return sequelize.define(
        'Grade',
        {
            t_rel_grade_id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
            },
            t_mst_client_id: {
              type: DataTypes.INTEGER,
            },
            grade_points: {
              type: DataTypes.ENUM('G', 'P'),
            },
            display_status: {
              type: DataTypes.ENUM('academic', 'nonacademic', 'both'),
              defaultValue: 'academic',
            },
            name: {
              type: DataTypes.STRING(100),
            },
            lower_limit: {
              type: DataTypes.INTEGER,
            },
            upper_limit: {
              type: DataTypes.INTEGER,
            },
            created_by: {
              type: DataTypes.INTEGER,
            },
          }
          ,
        {
            tableName: 't_rel_grade',
            underscored: true,
            timestamps: false
        }
    );
};

module.exports = Grade() ;

