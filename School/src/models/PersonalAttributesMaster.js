const { Sequelize, DataTypes } = require('sequelize');

const PersonalAttributesMaster = (sequelize) => {
    return sequelize.define('PersonalAttributesMaster', {
        t_rel_personal_attributes_master_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        t_mst_client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        updated_by: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
    }, {
        tableName: 't_rel_personal_attributes_master',
        timestamps: false
    });
};

module.exports = PersonalAttributesMaster;
