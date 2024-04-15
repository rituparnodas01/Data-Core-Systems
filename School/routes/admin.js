const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');
const Section = require('../src/controllers/SectionController');
const Grade = require('../src/controllers/gradecontroller');


// router.post('/Edit', ClasswiseSubjectStructure.Edit)
router.post('/AllSection', Section.AllSection)
router.post('/EditSection/:id', Section.EditSection)
router.post('/CreateNewSection', Section.CreateNewSection)
router.post('/SearchSection', Section.SearchSection)
router.post('/AllGrades', Grade.AllGrades)


module.exports = router;


