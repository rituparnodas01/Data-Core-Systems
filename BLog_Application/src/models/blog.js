module.exports = (DataTypes, sequelize) => {
  const Blog = sequelize.define('blog', {
    // Model attributes are defined here
    blog_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    blog_heading: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserId: DataTypes.INTEGER,

  }, {
    // Other model options go here
    //   tableName: 'educations',
    // timestamps: false
    sequelize, // We need to pass the connection instance
    modelName: 'Blog', // We need to choose the model name
    paranoid: true,
    deletedAt: 'destroyTime'
  });

  // // `sequelize.define` also returns the model
  // console.log(User === sequelize.models.User); // true

  return Blog;
}