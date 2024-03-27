

const authController = require("../src/controllers/authController");
const academicYearController = require('../src/controllers/academicYearController');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});


router.group('', (router) => {


})


router.group('/marksheet', (router) => {
  router.use([authMiddleware.checkSchoolAdminAuthUser]);
  router.post('/getmarksheet', marksSheetController.showmarksheet)
});
module.exports = router;


