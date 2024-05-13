const { Op } = require("sequelize");
const Section = require('../models/Section');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');


// var AllSection = async (req, res) => {
//     try {
//         var data = await Section.findAll({
//             attributes: ["t_rel_section_id","code","name"]
//         });
//         sendRecordsResponse(
//             res,
//             successCode,
//             "data get successfully",
//             data
//         );
//     } catch (error) {
//         console.log(error);
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!",
//         );
//     }
// }

var AllSection = async (req, res) => {
    try {
        const { page, pageSize } = req.body; // Assuming page number and page size are provided in the request body
        const offset = (page - 1) * pageSize;

        const data = await Section.findAll({
            attributes: ["t_rel_section_id","code","name"],
            limit: pageSize,
            offset: offset
        });

        // Count total number of records
        const totalCount = await Section.count();

        const totalPages = Math.ceil(totalCount / pageSize);

        const message = `Page ${page} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

        sendRecordsResponse(
            res,
            successCode,
            "Data retrieved successfully",
            {message , data}
        );
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
};


var EditSection = async (req, res) => {
    try {
        const { id, code, name } = req.body;

        // Null validation for id, code, and name
        if (!id || !code || !name) {
            return sendErrorResponse(
                res,
                validationErrorCode,
                "One or more required fields are missing."
            );
        }

        var data = await Section.update(
            { code, name },
            {
                where: {
                    t_rel_section_id: id
                }
            }
        );
        sendRecordsResponse(
            res,
            successCode,
            "Data updated successfully",
            data
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}

var CreateNewSection = async (req, res) => {
    try {
        const { code, name } = req.body;

        // Null validation for code and name
        if (!code || !name) {
            return sendErrorResponse(
                res,
                validationErrorCode,
                "One or more required fields are missing."
            );
        }

        var data = await Section.create({t_mst_client_id: 1, code, name, is_active: "y"});
        sendRecordsResponse(
            res,
            successCode,
            "Data created successfully",
            data
        );
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}

// const SearchSection = async (req, res) => {
// const { code, name } = req.body;
//     try {
//         const data = await Section.findAll({
//             attributes: ["t_rel_section_id", "code", "name"],
//             where: (code && name) ? { code, name } : (code ? { code } : (name ? { name } : {}))
//         });

//         sendRecordsResponse(
//             res,
//             successCode,
//             "Data retrieved successfully",
//             data
//         );
//     } catch (error) {
//         console.log(error);
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!"
//         );
//     }
// }

const SearchSection = async (req, res) => {
    const { code, name, page, pageSize } = req.body;
    try {
        const offset = (page - 1) * pageSize;

        const whereClause = {};
        if (code) whereClause.code = code;
        if (name) whereClause.name = name;

        const data = await Section.findAll({
            attributes: ["t_rel_section_id", "code", "name"],
            where: whereClause,
            limit: pageSize,
            offset: offset
        });

        // Count total number of records
        const totalCount = await Section.count({
            where: whereClause
        });

        const totalPages = Math.ceil(totalCount / pageSize);

        const message = `Page ${page} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

        sendRecordsResponse(
            res,
            successCode,
            "Data retrieved successfully",
            {message, data}
        );
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}

var DeleteSection = async (req, res) => {
    try {
        const {id} = req.body

        var data = await Section.destroy({
            where: {
                t_rel_section_id: id
            }
        })

        sendRecordsResponse(
            res,
            successCode,
            "Data updated successfully",
            data
        );
        
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}




module.exports = {
    AllSection,
    EditSection,
    CreateNewSection,
    SearchSection,
    DeleteSection
}