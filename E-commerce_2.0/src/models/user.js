module.exports = (DataTypes, sequelize) => {
    const User = sequelize.define('user', {
      // Model attributes are defined here
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      User_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      User_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      confirmPassword: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      // blog_id : DataTypes.INTEGER
    }, {
      // Other model options go here
      //   tableName: 'educations',
      // timestamps: false
      sequelize, // We need to pass the connection instance
      modelName: 'User', // We need to choose the model name
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
  
    return User;
  
  }