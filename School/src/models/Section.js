const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const Section = () => {
    return sequelize.define(
        'Section',
        {
            t_rel_section_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            t_mst_client_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING(20),
                defaultValue: null,
            },
            name: {
                type: DataTypes.STRING(20),
                defaultValue: null,
            },
            is_active: {
                type: DataTypes.ENUM('y', 'n'),
                allowNull: false,
                defaultValue: 'y',
            },
        },
        {
            tableName: 't_rel_section',
            underscored: true,
            timestamps: false
        }
    );
};

module.exports = Section();