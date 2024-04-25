const { Op } = require("sequelize");
const Class = require('../models/class');
const Section = require('../models/Section');
const Subject = require('../models/subject');
const Teacher = require('../models/teacher');
const class_section_subject_teacher_tagging = require('../models/class_section_subject_teacher_tagging');
const { sendSuccessResponse, sendRecordsResponse, sendErrorResponse } = require('../utils/response')
const { validationErrorCode, unauthErrorCOde, notfoundErrorCode, successCode, serverErrorCode } = require('../utils/statuscode');
const sequelize = require("../database/db");

// grade.belongsto(gradeStructure,{foreignkey: ""})
class_section_subject_teacher_tagging.belongsTo(Class, { foreignKey: 't_rel_class_id' });
class_section_subject_teacher_tagging.belongsTo(Section, { foreignKey: 't_rel_section_id' });
class_section_subject_teacher_tagging.belongsTo(Subject, { foreignKey: 't_rel_subject_id' });
class_section_subject_teacher_tagging.belongsTo(Teacher, { foreignKey: 't_rel_teacher_id' });


var AllFaculty = async (req, res) => {
    try {
        var data = await class_section_subject_teacher_tagging.findAll({
            attributes:[
                ["t_rel_class_section_subject_teacher_tagging_id", "id"],
                [sequelize.literal ("Teacher.code"), "Code"],
                [sequelize.literal ("Teacher.name"), "Name"],
                [sequelize.literal ("Class.name"), "class"],
                [sequelize.literal ("Section.name"), "section"],
                [sequelize.literal ("Subject.name"), "Tagged Subject"],
            ],
            include:[
                {
                    model: Teacher,
                    attributes: [],
                },
                {
                    model: Class,
                    attributes: [],
                },
                {
                    model: Section,
                    attributes: [],
                },
                {
                    model: Subject,
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

// var SearchFaculty = async (req, res) => {
//     try {
//         const { code, name, std, section, tag_sub} = req.body
//         var data = await class_section_subject_teacher_tagging.findAll({
//             attributes:[
//                 ["t_rel_class_section_subject_teacher_tagging_id", "id"],
//                 [sequelize.literal ("Teacher.code"), "Code"],
//                 [sequelize.literal ("Teacher.name"), "Name"],
//                 [sequelize.literal ("Class.name"), "class"],
//                 [sequelize.literal ("Section.name"), "section"],
//                 [sequelize.literal ("Subject.name"), "Tagged Subject"],
//             ],
//             include:[
//                 {
//                     model: Teacher,
//                     attributes: [],
//                     where:{
//                         [Op.and]: [
//                             { code },
//                             { name }
//                         ]
//                     }
//                 },
//                 {
//                     model: Class,
//                     attributes: [],
//                 },
//                 {
//                     model: Section,
//                     attributes: [],
//                 },
//                 {
//                     model: Subject,
//                     attributes: [],
//                 },
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
// }

var SearchFaculty = async (req, res) => {
    try {
        const { code, name, std, section, tag_sub } = req.body;
        var teacherWhere = {};
        var classWhere = {};
        var sectionWhere = {};
        var subjectWhere = {};

        // Define where conditions for each model separately
        if (code) teacherWhere.code = code;
        if (name) teacherWhere.name = name;
        if (std) classWhere.name = std;
        if (section) sectionWhere.name = section;
        if (tag_sub) subjectWhere.name = tag_sub;

        var data = await class_section_subject_teacher_tagging.findAll({
            attributes:[
                ["t_rel_class_section_subject_teacher_tagging_id", "id"],
                [sequelize.literal ("Teacher.code"), "Code"],
                [sequelize.literal ("Teacher.name"), "Name"],
                [sequelize.literal ("Class.name"), "class"],
                [sequelize.literal ("Section.name"), "section"],
                [sequelize.literal ("Subject.name"), "Tagged Subject"],
            ],
            include:[
                {
                    model: Teacher,
                    attributes: [],
                    where: teacherWhere
                },
                {
                    model: Class,
                    attributes: [],
                    where: classWhere
                },
                {
                    model: Section,
                    attributes: [],
                    where: sectionWhere
                },
                {
                    model: Subject,
                    attributes: [],
                    where: subjectWhere
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








module.exports = {
    AllFaculty,
    SearchFaculty
}