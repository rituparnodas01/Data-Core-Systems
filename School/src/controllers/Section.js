const Section = require('../models/Section');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');


var AllSection = async (req, res) => {
    // const { code, name } =req.body;
    try {
        var data = await Section.findAll({
            where: {
                is_active: "y"
            }
        });
        // console.log(data[0].code, data[0].name);
        sendRecordsResponse(
            res,
            successCode,
            "data get successfuly",
            data
        );
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "It's Not Working !!!, Internal server error!",
        );
    }
}

// const Edit = async(req, res, next) => {
//     const { code , name } = req.body;
//     try {
//         var data = await Section.findAll({
//             attributes:[ "code" , "name" ],
//             where: {
//                 name : sub_type
//             }
//         })
//         console.log(data[0].name,data[0].t_rel_subject_type);

//     } catch (error) {
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!",
//         );
//     }

//     try {
//         var data1 = await Subject.findAll({
//             attributes: [ "name" , "t_rel_subject_id" ],
//             where: {
//                 name: sub
//             }
//         })
//         console.log(data1[0].name , data1[0].t_rel_subject_id);
//     } catch (error) {
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!",
//         );
//     }
// }

module.exports = {
    // Edit
    AllSection
}