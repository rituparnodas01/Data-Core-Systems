const { Op } = require("sequelize");
const Section = require('../models/Section');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');


var AllSection = async (req, res) => {
    try {
        var data = await Section.findAll({
            attributes: ["t_rel_section_id","code","name"]
        });
        sendRecordsResponse(
            res,
            successCode,
            "data get successfully",
            data
        );
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }
}

var EditSection = async (req, res) => {
    try {
        const { id, code, name } = req.body;

        // Null validation for id, code, and name
        if (!id || !code || !name) {
            return sendErrorResponse(
                res,
                validationErrorCode,
                "ID, code, and name are required fields."
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
                "Code and name are required fields."
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

const SearchSection = async (req, res) => {
const { code, name } = req.body;
    try {
        const data = await Section.findAll({
            attributes: ["t_rel_section_id", "code", "name"],
            where: (code && name) ? { code, name } : (code ? { code } : (name ? { name } : {}))
        });

        sendRecordsResponse(
            res,
            successCode,
            "Data retrieved successfully",
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
    SearchSection
}