const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const ExamCategory = () => {
    return sequelize.define('ExamCategory', {
        t_rel_exam_category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        t_mst_client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        is_active: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: false,
            defaultValue: 'y'
        }
    },
    {
        tableName: 't_rel_exam_category',
        underscored: true,
        timestamps: false
    });
}

module.exports = ExamCategory();