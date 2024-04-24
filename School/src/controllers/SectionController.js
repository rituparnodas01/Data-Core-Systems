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

        const { id, code, name } = req.body
        var data = await Section.update({
            code, name},
            {
                where: {
                    t_rel_section_id: id
                }
            }
    )
    sendRecordsResponse(
        res,
        successCode,
        "data get successfully",
        data
    );
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }
}

var CreateNewSection = async (req, res) => {
    try {
        // const{id} = req.params
        const { code, name } = req.body
        var data = await Section.create({t_mst_client_id: 1, code, name, is_active: "y"})
    sendRecordsResponse(
        res,
        successCode,
        "data get successfully",
        data
    );
    } catch (error) {
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }
}

var SearchSection = async (req, res) => {
    const { code, name } =req.body;
    try {
        var data = await Section.findAll({
            attributes: ["t_rel_section_id","code","name"],
            where:{
                [Op.or]: [
                    { code },
                    { name }
                ]
            }
        });
        // console.log(data[0].code, data[0].name);
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

module.exports = {
    AllSection,
    EditSection,
    CreateNewSection,
    SearchSection
}