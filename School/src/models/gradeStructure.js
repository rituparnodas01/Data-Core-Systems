const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const gradeStructure = () => {
    return sequelize.define('gradeStructure', {
        t_rel_grade_structure_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        t_mst_client_id: {
            type: DataTypes.INTEGER,
        },
        ExamCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ExamCategories',
                key: 't_rel_exam_category_id'
            }
        },
        ClassId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Classes',
                key: 't_rel_class_id'
            }
        },
        AcademicYearId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'gradeStructure',
                key: 't_mst_academic_year_id'
            }
        }
    },
        {
            tableName: 't_rel_grade_structure',
            underscored: true,
            timestamps: false
        });
}

module.exports = gradeStructure();
