const { Op } = require("sequelize");
const Class = require('../models/class');
const Section = require('../models/Section');
const Section = require('../models/Section');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');
const sequelize = require("../database/db");

// grade.belongsto(gradeStructure,{foreignkey: ""})
gradeStructure.belongsTo(ExamCategory, { foreignKey: 't_rel_exam_category_id' });
gradeStructure.belongsTo(Class, { foreignKey: 't_rel_class_id' });
gradeStructure.belongsTo(AcademicYear, { foreignKey: 't_mst_academic_year_id' });






module.exports = {
    
}