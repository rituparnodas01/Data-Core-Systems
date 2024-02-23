// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require("./sequelize")

module.exports= (DataTypes,sequelize) => {
    const Education = sequelize.define('educations', {
      // Model attributes are defined here
      class_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      grade: {
        type: DataTypes.STRING,
        // defaultValue: permanent_address
        // allowNull defaults to true
      },
      passing_year: {
        type: DataTypes.INTEGER,
        // defaultValue: permanent_address
        // allowNull defaults to true
      },
      UserId : DataTypes.INTEGER
    }, {
      // Other model options go here
    //   tableName: 'educations',
      // timestamps: false
    
    });
    
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
    
    return Education;
    
    }





// const { Sequelize, DataTypes } = require('sequelize');


// module.exports = (DataTypes, sequelize) => {
 
// const Education = (sequelize) => {
//     return sequelize.define(
//         'educations',
//         {
            
//             class_name: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             grade: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             passing_year: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             UserId : DataTypes.INTEGER
//         },
//         {
//             tableName: 'educations',
//             // underscored: true,
//             // timestamps: false
//         }
//     );
// };
 
// return Education;
// }