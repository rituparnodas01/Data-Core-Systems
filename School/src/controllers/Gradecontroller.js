const { Op } = require("sequelize");
const gradeStructure = require('../models/gradeStructure');
const grade = require('../models/grade');
const Class = require('../models/class');
const ExamCategory = require('../models/examCategory');
const AcademicYear = require('../models/academicYear');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');
const sequelize = require("../database/db");

// grade.belongsto(gradeStructure,{foreignkey: ""})
gradeStructure.belongsTo(ExamCategory, { foreignKey: 't_rel_exam_category_id' });
gradeStructure.belongsTo(Class, { foreignKey: 't_rel_class_id' });
gradeStructure.belongsTo(AcademicYear, { foreignKey: 't_mst_academic_year_id' });


var AllGrades = async (req, res) => {

    var data = await gradeStructure.findAll ({
        attributes:[
            [sequelize.literal ("AcademicYear.code"), "academicyear"],
            [sequelize.literal ("Class.name"), "class"],
            [sequelize.literal ("ExamCategory.name"), "examcategory"],
        ],
        include:[
        {
            model: AcademicYear,
            attributes: [],
        },
        {
            model: Class,
            attributes: [],
        },
        {
            model: ExamCategory,
            attributes: [],
        },
    ]

    });
    sendRecordsResponse(
                res,
                successCode,
                "data get successfully",
                data
            );
}



module.exports = {
    AllGrades
}