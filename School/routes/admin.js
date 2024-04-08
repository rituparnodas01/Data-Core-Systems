const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');
const Section = require('../src/controllers/Section');


router.post('/Edit', ClasswiseSubjectStructure.Edit)
router.post('/AllSection', Section.AllSection)


module.exports = router;


