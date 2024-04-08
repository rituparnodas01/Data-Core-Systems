const DB = require('../models/index');
const Subject = require("../models/subject");
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode')

// const showClasswiseSubjectStructure = async (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// }



const Edit = async(req, res, next) => {
    const { sub_type , sub } = req.body;
    try {
        var data = await subjectType.findAll({
            attributes:[ "name" , "t_rel_subject_type_id" ],
            where: {
                name : sub_type
            }
        })
        console.log(data[0].name,data[0].t_rel_subject_type);
        
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }

    try {
        var data1 = await Subject.findAll({
            attributes: [ "name" , "t_rel_subject_id" ],
            where: {
                name: sub
            }
        })
        console.log(data1[0].name , data1[0].t_rel_subject_id);
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }
}

module.exports = {
    // showAcademicYearDetails
    Edit
}

