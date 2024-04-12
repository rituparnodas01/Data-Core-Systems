const { Op } = require("sequelize");
const gradeStructure = require('../models/gradeStructure');
const Class = require('../models/class');
const ExamCategory = require('../models/examCategory');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');




module.exports = {

}