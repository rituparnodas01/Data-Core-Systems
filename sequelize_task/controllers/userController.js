const { sequelize, QueryTypes } = require('sequelize');
const express = require('express');
var db = require('../models/index')
var Town = db.town;
var District = db.district;
var State = db.state;
var User = db.user;

// var addtown = async (req,res) => {
//     var data = await Town.create({'townName': 'BKPAL', 'townCode': 'bkp'})
//     // res.send("addtown")
//     res.status(200).json({ data });
// }


// var adddistrict = async (req,res) => {
//     console.log(data.id);
//     var data =  await District.create({'districtName': 'bethuadahari', 'districtCode': 'bty', 'TownId': data.id})
//     // res.send("adddistrict")
//     res.status(200).json({ data });
// }


// var addstate = async (req,res) => {
//     var data = await State.create({'stateName': 'Darjeeling', 'stateCode': 'ddr', 'DistrictId': data.id})
//     // res.send("addstate")
//     res.status(200).json({ data });
// }


// var addalldata = async (req, res) => {
    
//     // Creating Datas

//     var data = await Town.create({'townName': 'BagBazar', 'townCode': 'bbr'})
//         if (data && data.id){
//             await District.create({'districtName': 'Murshidabad', 'districtCode': 'mdd', 'TownId': data.id})
//         }
//         if (data && data.id){
//             await State.create({'stateName': 'Bankura', 'stateCode': 'BK', 'DistrictId': data.id})
//         }
// }

// var getAll = async (req, res) => {

//     var towns = await Town.findAll()
//     var districts = await District.findAll()
//     var states = await State.findAll()
//     res.status(200).json({data : towns, });
// }


//******************************************************************************************************************************************//







    // Creating Datas

    // var data = await State.create({'stateName': 'stateB', 'stateCode': 's02'})
    //     if (data && data.id){
    //         await District.create({'districtName': 'districtB', 'districtCode': 'd02', 'StateId': data.id})
    //     }
    //     if (data && data.id){
    //         await Town.create({'townName': 'townB', 'townCode': 't02', 'DistrictId': data.id})
    //     }
    //     if (data && data.id){
    //         await User.create({'userName': 'userB', 'userCode': 'u02', 'TownId': data.id})
    //     }

//******************************************************************************************************************************************//

/// State ==> District

    // var data = await State.findAll({
    //     include:State,
    //     attributes: ['stateName','stateCode'],
    //     include: [{
    //         model: District,
    //         attributes: ['districtName','districtCode']
    //     }],
    //     where: { id: '1' }
    // })

                            //**********************************************************************************//

/// District ==> Town

    // var data = await District.findAll({
    //     // include:District,
    //     attributes: ['districtName','districtCode'],
    //     include: [{
    //         model: Town,
    //         attributes: ['townName','townCode']
    //     }],
    //     where: { id: '2' }
    // })

                            //**********************************************************************************//

/// Town ==> User

    // var data = await Town.findAll({
    //     // include: Town
    //     attributes: ['townName','townCode'],
    //     include: [{
    //         model: User,
    //         attributes: ['userName','userCode']
    //     }],
    //     where: { id: '1' }
    // })

//******************************************************************************************************************************************//
    
    //  var data = await State.findAll({
    //     // include: State
    //     attributes: ['stateName','stateCode'],
    //     include: [{
    //         model:  District,
    //         attributes: ['districtName','districtCode']
    //     }],
    //     where: { id: '1' }
    // })

                              //**********************************************************************************//


/// User ==> Town ==> District ==> State
var onetoone = async (req, res) => {

    //  var data =  await User.findAll({
    //     attributes:['userName'],
    //     include: 
    //     {
    //         model: Town,
    //         attributes:['townName'],
    //         include:{
    //             model: District,
    //             attributes:['districtName'],
    //             include:{
    //                 model: State,
    //                 attributes:['stateName'],
    //             }
    //         }
    //     },
    //     where: { id: '1' }
    //  })

    var data =  await User.findAll({
        attributes:[
            ['UserId','UserId'],
            ['userName','userName'],
            [db.sequelize.literal('Town.TownId'), 'TownId'],
            [db.sequelize.literal('Town.townName'), 'townName'],
            [db.sequelize.literal('`Town->District`.DistrictId'), 'DistrictId'],
            [db.sequelize.literal('`Town->District`.districtName'), 'districtName'],
            [db.sequelize.literal('`Town->District->State`.StateId'), 'StateId'],
            [db.sequelize.literal('`Town->District->State`.stateName'), 'stateName'],
        ],
        include:
            {
                model: Town,
                attributes: [], 
                include: {
                    model: District,
                    attributes: [],  
                    include: {
                        model: State,
                        attributes: [],   
                    }, 
                },  
            },
            
            
        
    })

    //  var data3 = data+data1+data2

    res.status(200).json({ data });

}


//     var data =  await User.findAll({
//         attributes:[
//             ['userName','userName'],
//             [db.sequelize.literal('Town.townName'), 'townName'],
//             [db.sequelize.literal('District.districtName'), 'districtName'],
//             [db.sequelize.literal('State.stateName'), 'stateName'],
//         ],
//         include:[
//             {
//                 model: Town,
//                 attributes: [],   
//             },
//             {
//                 model: District,
//                 attributes: [],   
//             },
//             {
//                 model: State,
//                 attributes: [],   
//             },
//         ]
//     })

//     //  var data3 = data+data1+data2

//     res.status(200).json({ data });

// }





// const marksDetails = await StudentDetails.findAll({
//     attributes: [
//         ['t_rel_student_details_id', 'student_details_id'],
//         ['t_rel_class_id', 'class_id'],
//         [sequelize.literal('Student.first_name'), 'first_name'], // though its model name in Students but still it gets Student in query
//         [sequelize.literal('Student.middle_name'), 'middle_name'],
//         [sequelize.literal('Student.last_name'), 'last_name'],
//         [sequelize.literal('Student.registration_no'), 'registration_no/UID'],
//         [sequelize.literal('Class.name'), 'className'],
//         [sequelize.literal('Class.code'), 'classCode'],
//         [sequelize.literal('Section.code'), 'SectionCode'],
//         [sequelize.literal('Section.name'), 'SectionName'],
//         [sequelize.literal('ExamMarksSubjectDetails.obtained_marks'), 'obtained_marks'],
//     ],
//     include: [
//         {
//             model: Students,
//             attributes: [],
//             where: {
//                 is_active: 'y',
//                 t_mst_client_id: process.env.client_id,
//             },
//             required: false,
//         },






//******************************************************************************************************************************************//


// var onetomany = async (req, res) => {
//     var data = await Town.findAll({
//         // include:District,


//     //     attributes: ['townName','townCode'],
//     //     include: [{
//     //         model: District,
//     //         attributes: ['districtName','districtCode']
//     //     }],
//     //     where: { id: '2' }
//     })
//     res.status(200).json({ data });

// }


module.exports = {
    // addtown,
    // adddistrict,
    // addstate,
    // addalldata,
    // getAll,
    onetoone,
    // onetomany
}