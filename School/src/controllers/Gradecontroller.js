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


var AllGradesStructure = async (req, res) => {

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
        const { id } = req.body;
        var existingData = await gradeStructure.findOne({
            where: {
                t_rel_grade_structure_id: id
            }
        });

        if (!existingData) {
            return sendErrorResponse(
                res,
                notfoundErrorCode,
                "Data not found!"
            );
        }

        const updatedIsActive = existingData.is_active === 'y' ? 'n' : 'y';

        var data = await gradeStructure.update(
            { is_active: updatedIsActive },
            {
                where: {
                    t_rel_grade_structure_id: id
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
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}

var ViewGrades = async (req, res) => {

    try {
        var data = await grade.findAll({
            attributes: ["grade_points","display_status","name","lower_limit","upper_limit"]
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

var EditGrades = async (req, res) => {
    try {
        const { id, grade_points, display_status, name, lower_limit, upper_limit } = req.body;

        // Null validation for grade_points, display_status, name, lower_limit, and upper_limit
        if (!grade_points || !display_status || !name || !lower_limit || !upper_limit) {
            return sendErrorResponse(
                res,
                validationErrorCode,
                "(*) are the required fields."
            );
        }

        var data = await grade.update(
            { grade_points, display_status, name, lower_limit, upper_limit },
            {
                where: {
                    t_rel_grade_id: id
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
        console.log(error);
        return sendErrorResponse(
            res,
            serverErrorCode,
            "Internal server error!"
        );
    }
}
















module.exports = {
    AllGradesStructure,
    SearchGrades,
    ChangeStatus,
    ViewGrades,
    EditGrades
}