const { DataTypes } = require('sequelize');
const sequelize = require("../database/db");

const Class = () => {
  return sequelize.define(
    'Class',
    {
      t_rel_class_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      t_mst_client_id: {
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(10)
      },
      name: {
        type: DataTypes.STRING(100),
      },
      sequence: {
        type: DataTypes.INTEGER,
      },
      is_x_xii: {
        type: DataTypes.ENUM('y', 'n'),
      },
      is_active: {
        type: DataTypes.ENUM('y', 'n'),
      },
    },
    {
      tableName: 't_rel_Class',
      underscored: true,
      timestamps: false
    }
  );
};

module.exports = Class();