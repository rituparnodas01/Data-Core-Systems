const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const class_section_subject_teacher_tagging = () => {
  return sequelize.define(
    'class_section_subject_teacher_tagging',
    {
      t_rel_class_section_subject_teacher_tagging_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      t_mst_client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      t_rel_class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      t_rel_section_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      t_rel_subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      t_rel_teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('y', 'n'),
        allowNull: false,
        defaultValue: 'y'
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
    },
    {
      tableName: 't_rel_class_section_subject_teacher_tagging',
      underscored: true,
      timestamps: false
    }
  );
};

module.exports = class_section_subject_teacher_tagging();
  