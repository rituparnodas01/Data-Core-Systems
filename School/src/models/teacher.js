const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const Teacher = () => {
    return sequelize.define(
        'Teacher',
        {
            t_rel_teacher_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            t_mst_client_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            t_mst_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            faculty_type_id: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            code: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            qualification: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            gender: {
                type: DataTypes.ENUM('m', 'f', 't'),
                allowNull: true
            },
            t_mst_blood_gr_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            address1: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            address2: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            mobile: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            photo: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            signature: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            pincode: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            primary_subject_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            primary_stream_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            t_mst_religion_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            city: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            t_mst_country_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            t_mst_state_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            date_of_birth: {
                type: DataTypes.DATE,
                allowNull: true
            },
            marital_status: {
                type: DataTypes.ENUM('s', 'm', 'd', 'w'),
                allowNull: true
            },
            date_of_joining: {
                type: DataTypes.DATE,
                allowNull: true
            },
            date_of_resignation: {
                type: DataTypes.DATE,
                allowNull: true
            },
            status: {
                type: DataTypes.ENUM('active', 'inactive', 'blocked'),
                allowNull: false,
                defaultValue: 'active'
            }
        }, {
        tableName: 't_rel_teacher',
        underscored: true,
        timestamps: false
    }
    );
};

module.exports = Teacher();
