const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');
const Section = require('../src/controllers/SectionController');


router.post('/Edit', ClasswiseSubjectStructure.Edit)
router.post('/AllSection', Section.AllSection)
router.post('/EditSection/:id', Section.EditSection)
router.post('/CreateNewSection', Section.CreateNewSection)
router.post('/SearchSection', Section.SearchSection)


module.exports = router;


