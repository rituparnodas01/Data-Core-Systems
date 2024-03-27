const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ClasswiseSubjectStructure extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  ClasswiseSubjectStructure.init(
    {
      t_rel_class_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      t_mst_client_id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING(10),
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
      sequelize,
      modelName: 'ClasswiseSubjectStructure',
      tableName: ' t_rel_class',
      underscored: true,
    }
  );

  return ClasswiseSubjectStructure;
};
