const { Sequelize, DataTypes } = require('sequelize');

const SubjectType = (sequelize) => {
    return sequelize.define(
        'SubjectType',
        {

            t_rel_subject_type_id: {
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
            is_active: {
                type: DataTypes.ENUM('y', 'n'),
                defaultValue: 'y',
            },
        },
        {
            tableName: 't_rel_subject_type',
            underscored: true,
        }
    );
};

module.exports = SubjectType;
