const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const Subject = () => {
    return sequelize.define(
        'Subject',
        {
            t_rel_subject_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            t_mst_client_id: {
                type: DataTypes.INTEGER,
            },
            code: {
                type: DataTypes.STRING(30),
            },
            name: {
                type: DataTypes.STRING(100),
            },
            display_name: DataTypes.STRING(255),
            subject_type: DataTypes.ENUM('Language', 'Literature', 'Non-Language'),
            is_active: {
                type: DataTypes.ENUM('y', 'n'),
                defaultValue: 'y',
            },
        },
        {
            tableName: 't_rel_subject',
            underscored: true,
            timestamps: false,
        }
    );
};

module.exports = Subject;
