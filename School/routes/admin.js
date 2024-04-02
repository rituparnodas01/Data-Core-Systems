const express = require("express");
const router = express.Router();
const ClasswiseSubjectStructure = require('../src/controllers/ClasswiseSubjectStructure');


router.post('/Edit', ClasswiseSubjectStructure.Edit)


module.exports = router;


