const Subject = require("../models/subject");
const SubjectType = require("../models/subjectType");
const Class = require("../models/class");
const AcademicDetails = require("../models/academicDetails");
const AcademicYear = require("../models/academicYear");
const ClassSubject = require("../models/classSubject")
const AcademicCategoryFirst = require("../models/academicCategoryFirst");
const AcademicCategorySecond = require("../models/academicCategorySecond");
const { Op, where } = require("sequelize");
const sequelize = require("../database/db");
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode')


AcademicDetails.belongsTo(Class, { foreignKey: 't_rel_class_id' });
AcademicDetails.belongsTo(AcademicYear, { foreignKey: 't_mst_academic_year_id' });
AcademicDetails.belongsTo(AcademicCategoryFirst, { foreignKey: 't_rel_academic_category_first_id' });
AcademicDetails.belongsTo(AcademicCategorySecond, { foreignKey: 't_rel_academic_category_second_id' });

ClassSubject.belongsTo(Class, { foreignKey: 't_rel_class_id' });
ClassSubject.belongsTo(AcademicYear, { foreignKey: 't_mst_academic_year_id' });
ClassSubject.belongsTo(Subject, { foreignKey: 't_rel_subject_id' });
ClassSubject.belongsTo(SubjectType, { foreignKey: 't_rel_subject_type_id' });



var SubwiseStructure = async (req, res) => {

    try {
        var data = await AcademicDetails.findAll({
            attributes: [
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"]
            ],
            include: [
                {
                    model: AcademicYear,
                    attributes: [],
                    where: {
                        code: 2023
                    }
                },
                {
                    model: Class,
                    attributes: [],
                }
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

var SubMarks = async (req, res) => {

    try {
        // var data = await AcademicDetails.findAll({
        //     attributes: [
        //         [sequelize.literal("AcademicCategoryFirst.name"), "Category-1"],
        //         [sequelize.literal("AcademicCategorySecond.name"), "Category-2"]
        //     ],
        //     include: [
        //         {
        //             model: AcademicCategoryFirst,
        //             attributes: [],
        //         },
        //         {
        //             model: AcademicCategorySecond,
        //             attributes: [],
        //         }
        //     ]

        var Category1 = await AcademicCategoryFirst.findAll({
            attributes: ['name']
        });

        var Category2 = await AcademicCategorySecond.findAll({
            attributes: ['name']
        });

        var combinedData = {
            Category_1: Category1,
            Category_2: Category2
        };


        sendRecordsResponse(
            res,
            successCode,
            "data get successfully",
            combinedData
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

var ViewSS = async (req, res) => {
    try {
        const { name } = req.params
        var data = await ClassSubject.findAll({
            attributes: [
                ["t_rel_class_subject_id", "id"],
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"],
                [sequelize.literal("SubjectType.name"), "subjecttype"],
                [sequelize.literal("Subject.name"), "subject"],
            ],
            include: [
                {
                    model: AcademicYear,
                    attributes: [],
                    // where: {
                    //     code: 2023
                    // }
                },
                {
                    model: Class,
                    attributes: [],
                    where:{
                        name
                    }
                },
                {
                    model: Subject,
                    attributes: [],
                },
                {
                    model: SubjectType,
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

// var EditSS = async (req, res) => {
//     try {
//         const { id, name } = req.params
//         const {Subject} = req.body
//         const data = await ClassSubject.update(
//             { Subject }, // Update values
//             {
//                 where: { t_rel_class_subject_id: id }, 

//                 attributes: [
//                     ["t_rel_class_subject_id", "id"],
//                     [sequelize.literal("AcademicYear.code"), "academicyear"],
//                     [sequelize.literal("Class.name"), "class"],
//                     [sequelize.literal("SubjectType.name"), "subjecttype"],
//                     [sequelize.literal("Subject.name"), "subject"],
//                 ],
//                 include: [
//                     {
//                         model: AcademicYear,
//                         attributes: [], 
//                     },
//                     {
//                         model: Class,
//                         attributes: [], 
//                         where: { name } 
//                     },
//                     {
//                         model: SubjectType,
//                         attributes: [] 
//                     },
//                     {
//                         model: Subject,
//                         attributes: [] 
//                     },
//                 ],
//             }
//         );
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

var EditSS = async (req, res) => {
    try {
        const { id, name, t_rel_subject_id } = req.body;
        const data = await ClassSubject.update(
            { t_rel_subject_id },
            {
                where: { t_rel_class_subject_id: id },
                include: [
                    {
                        model: AcademicYear,
                        attributes: [],
                    },
                    {
                        model: Class,
                        attributes: [],
                        where: { name },    
                    },
                    {
                        model: SubjectType,
                        attributes: [],
                    },
                    {
                        model: Subject,
                        attributes: [],
                    },
                ],
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
};


module.exports = {
    SubwiseStructure,
    SubMarks,
    ViewSS,
    EditSS
}

