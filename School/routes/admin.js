const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');
const Section = require('../src/controllers/SectionController');
const Grade = require('../src/controllers/gradecontroller');
const Faculty = require('../src/controllers/FacultyController');


// ClasswiseSubjectStructure
router.post('/SS', ClasswiseSubjectStructure.SubwiseStructure)
router.post('/SSS', ClasswiseSubjectStructure.SearchSubwiseStructure)
router.post('/SubMarks', ClasswiseSubjectStructure.SubMarks)
router.post('/ViewSS', ClasswiseSubjectStructure.ViewSS)
router.post('/EditSS', ClasswiseSubjectStructure.EditSS)


// Section
router.post('/AllSection', Section.AllSection)
router.post('/EditSection', Section.EditSection)
router.post('/CreateNewSection', Section.CreateNewSection)
router.post('/SearchSection', Section.SearchSection)
router.post('/DeleteSection', Section.DeleteSection)


// Grade
router.post('/AllGrades', Grade.AllGradesStructure)
router.post('/SG', Grade.SearchGrades)
router.post('/CS', Grade.ChangeStatus)
router.post('/VG', Grade.ViewGrades)
router.post('/EG', Grade.EditGrades)


// Faculty
router.post('/AllFaculty', Faculty.AllFaculty)
router.post('/SearchFaculty', Faculty.SearchFaculty)
router.post('/AddFaculty', Faculty.AddFaculty)
router.post('/EditFaculty', Faculty.EditFaculty)
router.post('/DeleteFaculty', Faculty.DeleteFaculty)


module.exports = router;


