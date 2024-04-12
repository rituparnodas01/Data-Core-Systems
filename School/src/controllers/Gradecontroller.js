const { Op } = require("sequelize");
const gradeStructure = require('../models/gradeStructure');
const grade = require('../models/grade');
const Class = require('../models/class');
const ExamCategory = require('../models/examCategory');
const academicYear = require('../models/academicYear');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');

// grade.belongsto(gradeStructure,{foreignkey: ""})
Class.belongsto(gradeStructure,{foreignkey: "t_rel_class_id"})
ExamCategory.belongsto(gradeStructure,{foreignkey: "t_rel_exam_category_id"})
academicYear.belongsto(gradeStructure,{foreignkey: "t_mst_academic_year_id"})

var AllGrades = async (req, res) => {
    try {
        var data = await Section.findAll({
            
        });
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

module.exports = {

}