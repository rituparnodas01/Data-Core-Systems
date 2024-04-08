const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section extends Model {
        static associate(models) {
            // Define associations here if needed
        }
    }

    Section.init(
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
            sequelize,
            modelName: 'Section',
            tableName: 't_rel_section',
            underscored: true,
        }
    );

    return Section;
};
