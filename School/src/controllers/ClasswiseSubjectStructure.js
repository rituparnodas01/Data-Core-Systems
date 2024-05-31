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



// var SubwiseStructure = async (req, res) => {

//     try {
//         const {code} =req.body
//         var data = await AcademicDetails.findAll({
//             attributes: [
//                 [sequelize.literal("AcademicYear.code"), "academicyear"],
//                 [sequelize.literal("Class.name"), "class"]
//             ],
//             include: [
//                 {
//                     model: AcademicYear,
//                     attributes: [],
//                     where: {
//                         code
//                     }
//                 },
//                 {
//                     model: Class,
//                     attributes: [],
//                 }
//             ]

//         });
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
// };

// const SubwiseStructure = async (req, res) => {
//     try {
//         const { code, page, pageSize } = req.body; // Assuming page number and page size are provided in the request body
//         const offset = (page - 1) * pageSize;

//         // Fetch data for the current page
//         const data = await AcademicDetails.findAll({
//             attributes: [
//                 [sequelize.literal("AcademicYear.code"), "academicyear"],
//                 [sequelize.literal("Class.name"), "class"]
//             ],
//             include: [
//                 {
//                     model: AcademicYear,
//                     attributes: [],
//                     where: {
//                         code
//                     }
//                 },
//                 {
//                     model: Class,
//                     attributes: [],
//                 }
//             ],
//             limit: pageSize,
//             offset: offset
//         });

//         // Count total number of records for the given code
//         const totalCount = await AcademicDetails.count({
//             include: [
//                 {
//                     model: AcademicYear,
//                     where: {
//                         code
//                     }
//                 }
//             ]
//         });

//         const totalPages = Math.ceil(totalCount / pageSize);

//         const message = `Page ${page} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

//         sendRecordsResponse(
//             res,
//             successCode,
//             "Data retrieved successfully",
//             { message, data}
//         );
//     } catch (error) {
//         console.log(error);
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!"
//         );
//     }
// };

// var SearchSubwiseStructure = async (req, res) => {
//     try {
//         const { year, std } = req.body;
//         var academicYearWhere = {};
//         var classWhere = {};

//         // Define where conditions for each model separately
//         if (year) academicYearWhere.year = year;
//         if (std) classWhere.name = std;

//         var data = await AcademicDetails.findAll({
//             attributes: [
//                 [sequelize.literal("AcademicYear.code"), "academicyear"],
//                 [sequelize.literal("Class.name"), "class"]
//             ],
//             include: [
//                 {
//                     model: AcademicYear,
//                     attributes: [],
//                     where: academicYearWhere
//                 },
//                 {
//                     model: Class,
//                     attributes: [],
//                     where: classWhere
//                 }
//             ]
//         });

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
// };


const SubwiseStructure = async (req, res) => {
    try {
        const { code } = req.body;  // Assuming 'code' is still provided in the request body
        const { page = 1, limit = 10 } = req.query;  // Default values for page and limit

        const pageNumber = parseInt(page);
        const pageSize = parseInt(limit);
        const offset = (pageNumber - 1) * pageSize;

        // Fetch data for the current page
        const data = await AcademicDetails.findAll({
            attributes: [
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"]
            ],
            include: [
                {
                    model: AcademicYear,
                    attributes: [],
                    where: {
                        code
                    }
                },
                {
                    model: Class,
                    attributes: [],
                }
            ],
            limit: pageSize,
            offset: offset
        });

        // Count total number of records for the given code
        const totalCount = await AcademicDetails.count({
            include: [
                {
                    model: AcademicYear,
                    where: {
                        code
                    }
                }
            ]
        });

        const totalPages = Math.ceil(totalCount / pageSize);

        const message = `Page ${pageNumber} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

        sendRecordsResponse(
            res,
            successCode,
            "Data retrieved successfully",
            { message, data }
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

// var SearchSubwiseStructure = async (req, res) => {
//     try {
//         const { year, std, page, pageSize } = req.body;
        
//         var academicYearWhere = {};
//         var classWhere = {};

//         // Define where conditions for each model separately
//         if (year) academicYearWhere.year = year;
//         if (std) classWhere.name = std;

//         const offset = (page - 1) * pageSize;

//         const data = await AcademicDetails.findAll({
//             attributes: [
//                 [sequelize.literal("AcademicYear.code"), "academicyear"],
//                 [sequelize.literal("Class.name"), "class"]
//             ],
//             include: [
//                 {
//                     model: AcademicYear,
//                     attributes: [],
//                     where: academicYearWhere
//                 },
//                 {
//                     model: Class,
//                     attributes: [],
//                     where: classWhere
//                 }
//             ],
//             limit: pageSize,
//             offset: offset
//         });

//         // Count total number of records
//         const totalCount = await AcademicDetails.count({
//             include: [
//                 {
//                     model: AcademicYear,
//                     where: academicYearWhere
//                 },
//                 {
//                     model: Class,
//                     where: classWhere
//                 }
//             ]
//         });

//         const totalPages = Math.ceil(totalCount / pageSize);

//         const message = `Page ${page} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

//         sendRecordsResponse(
//             res,
//             successCode,
//             "Data retrieved successfully",
//             {message,data}
//         );
//     } catch (error) {
//         console.log(error);
//         return sendErrorResponse(
//             res,
//             serverErrorCode,
//             "Internal server error!"
//         );
//     }
// };


var SearchSubwiseStructure = async (req, res) => {
    try {
        const { year, std } = req.body;
        const { page = 1, limit = 10 } = req.query;  // Default values for page and limit

        const pageNumber = parseInt(page);
        const pageSize = parseInt(limit);
        const offset = (pageNumber - 1) * pageSize;

        var academicYearWhere = {};
        var classWhere = {};

        // Define where conditions for each model separately
        if (year) academicYearWhere.year = year;
        if (std) classWhere.name = std;

        const data = await AcademicDetails.findAll({
            attributes: [
                [sequelize.literal("AcademicYear.code"), "academicyear"],
                [sequelize.literal("Class.name"), "class"]
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
                }
            ],
            limit: pageSize,
            offset: offset
        });

        // Count total number of records
        const totalCount = await AcademicDetails.count({
            include: [
                {
                    model: AcademicYear,
                    where: academicYearWhere
                },
                {
                    model: Class,
                    where: classWhere
                }
            ]
        });

        const totalPages = Math.ceil(totalCount / pageSize);

        const message = `Page ${pageNumber} of ${totalPages} | View ${pageSize} records | Found total ${totalCount} records`;

        sendRecordsResponse(
            res,
            successCode,
            "Data retrieved successfully",
            { message, data }
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


var SubMarks = async (req, res) => {

    try {
        var data = await AcademicDetails.findAll({
            attributes: [
                [sequelize.literal("AcademicCategoryFirst.name"), "Category-1"],
                [sequelize.literal("AcademicCategorySecond.name"), "Category-2"],
                [sequelize.literal("'NULL'"), "Full Marks"],
            ],
            include: [
                {
                    model: AcademicCategoryFirst,
                    attributes: [],
                },
                {
                    model: AcademicCategorySecond,
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
};

var ViewSS = async (req, res) => {
    try {
        const { name } = req.body
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
                    where: {
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
};

var EditSS = async (req, res) => {
    try {
        const { id, name, t_rel_subject_id } = req.body;

        // Null validation for id, name, and t_rel_subject_id
        if (!id || !name || !t_rel_subject_id) {
            return sendErrorResponse(
                res,
                validationErrorCode,
                "ID, name, and t_rel_subject_id are required fields."
            );
        }

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

var AddSS = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
    

module.exports = {
    SubwiseStructure,
    SearchSubwiseStructure,
    SubMarks,
    ViewSS,
    EditSS,
    AddSS
}
