const { QueryTypes } = require('sequelize');
const DB = require('../models');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode')


const sequelize = DB.sequelize;

const showClasswiseSubjectStructure = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    showAcademicYearDetails
}

