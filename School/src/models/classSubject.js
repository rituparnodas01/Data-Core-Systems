const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const ClassSubject = () => {
    return sequelize.define(
        'ClassSubject',
        {
            t_rel_class_subject_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
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
            t_rel_stream_id: DataTypes.INTEGER,
            t_rel_subject_type_id: DataTypes.INTEGER,
            result_type: {
                type: DataTypes.ENUM('grade', 'marks', 'both'),
                defaultValue: 'both',
            },
            formative_1_full_marks: DataTypes.INTEGER,
            formative_1_weightage: DataTypes.INTEGER,
            formative_2_full_marks: DataTypes.INTEGER,
            formative_2_weightage: DataTypes.INTEGER,
            summative_1_full_marks: DataTypes.INTEGER,
            summative_1_weightage: DataTypes.INTEGER,
            formative_3_full_marks: DataTypes.INTEGER,
            formative_3_weightage: DataTypes.INTEGER,
            formative_4_full_marks: DataTypes.INTEGER,
            formative_4_weightage: DataTypes.INTEGER,
            summative_2_full_marks: DataTypes.INTEGER,
            summative_2_weightage: DataTypes.INTEGER,
            internal_1_assessment_full_marks: DataTypes.INTEGER,
            theory_1_full_marks: DataTypes.INTEGER,
            project_practical_1_full_marks: DataTypes.INTEGER,
            internal_2_assessment_full_marks: DataTypes.INTEGER,
            theory_2_full_marks: DataTypes.INTEGER,
            project_practical_2_full_marks: DataTypes.INTEGER,
        },
        {
            tableName: 't_rel_class_subject',
            underscored: true,
            timestamps: false
        }
    );
};

module.exports = ClassSubject();