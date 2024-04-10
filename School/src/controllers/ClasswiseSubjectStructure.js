const Subject = require("../models/subject");
const SubjectType = require("../models/subjectType");
const CLass = require("../models/class");
const AcademicDetails = require("../models/academicDetails");
const AcademicYear = require("../models/academicYear");

const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode')




// const showClasswiseSubjectStructure = async (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// }



// var Edit = async(req, res) => {

//     // try {
//         const { sub_type , sub } = req.body;
//     //     var data = await SubjectType.findAll({
//     //         attributes:[ "name" , "t_rel_subject_type_id" ],
//     //         where: {
//     //             name : sub_type
//     //         }
//     //     })
//     //     console.log(data[0].name,data[0].t_rel_subject_type);

//     //     // sendRecordsResponse(
//     //     //     res,
//     //     //     successCode,
//     //     //     "data get successfully",
//     //     //     data
//     //     // );
        
//     // } catch (error) {
//     //     return sendErrorResponse(
//     //         res,
//     //         serverErrorCode,
//     //         "Internal server error!",
//     //     );
//     // }

//     try {
//         var data1 = await Subject.findAll({
//             attributes: [ "name" , "t_rel_subject_id" ],
//             where: {
//                 name: sub
//             }
//         })
//         console.log(data1[0].name , data1[0].t_rel_subject_id);

//         sendRecordsResponse(
//             res,
//             successCode,
//             "data get successfully",
//             data1
//         );

//     } catch (error) {
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!",
//         );
//     }
// }

module.exports = {
    // showAcademicYearDetails
    // Edit
}

