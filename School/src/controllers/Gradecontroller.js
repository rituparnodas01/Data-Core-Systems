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

    try {
        var data = await gradeStructure.findAll({
            attributes: [
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"],
                [sequelize.literal("ExamCategory.name"), "examcategory"],
                [sequelize.literal("'NULL'"), "Title"],
                [sequelize.literal("'Active'"), "Status"],

            ],
            include: [
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
    } catch (error) {
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!",
        );
    }
}

var SearchGrades = async (req, res) => {
    try {
        const { year, std, status, title, ec } = req.body;

        // Define where conditions for each include block separately
        const academicYearWhere = year ? { year } : {};
        const classWhere = std ? { name: std } : {};
        const examCategoryWhere = ec ? { name: ec } : {};

        var data = await gradeStructure.findAll({
            attributes: [
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"],
                [sequelize.literal("ExamCategory.name"), "examcategory"],
                [sequelize.literal("'NULL'"), "Title"],
                [sequelize.literal("'Active'"), "Status"],
            ],
            include: [
                {
                    model: AcademicYear,
                    attributes: [],
                    where: academicYearWhere
                },
                {
                    model: Class,
                    attributes: [],
                    where: classWhere
                },
                {
                    model: ExamCategory,
                    attributes: [],
                    where: examCategoryWhere
                },
            ]
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
            "Internal server error!"
        );
    }
}

var ChangeStatus = async (req, res) => {
    try {

        var data = await gradeStructure.updte({


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
            "Internal server error!"
        );
    }
}







module.exports = {
    AllGrades,
    SearchGrades
}