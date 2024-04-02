const { Sequelize, DataTypes } = require('sequelize');

const PersonalAttributesClassTagging = (sequelize) => {
    return sequelize.define('PersonalAttributesClassTagging', {
        t_rel_personal_attributes_class_tagging_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        t_rel_personal_attributes_indicator_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        t_rel_class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM('Common', 'Thinking Skills', 'Social Skills', 'Emotional Skills'),
            defaultValue: 'Common'
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
        tableName: 't_rel_personal_attributes_class_tagging',
        timestamps: false
    });
};

module.exports = PersonalAttributesClassTagging;
