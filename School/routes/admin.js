const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');
const Section = require('../src/controllers/SectionController');
const Grade = require('../src/controllers/gradecontroller');
const Faculty = require('../src/controllers/FacultyController');


router.post('/SS', ClasswiseSubjectStructure.SubwiseStructure)
router.post('/SSS', ClasswiseSubjectStructure.SearchSubwiseStructure)
router.post('/SubMarks', ClasswiseSubjectStructure.SubMarks)
router.post('/ViewSS', ClasswiseSubjectStructure.ViewSS)
router.post('/EditSS', ClasswiseSubjectStructure.EditSS)

router.post('/AllSection', Section.AllSection)
router.post('/EditSection', Section.EditSection)
router.post('/CreateNewSection', Section.CreateNewSection)
router.post('/SearchSection', Section.SearchSection)

router.post('/AllGrades', Grade.AllGrades)

router.post('/AllFaculty', Faculty.AllFaculty)
router.post('/SearchFaculty', Faculty.SearchFaculty)


module.exports = router;


