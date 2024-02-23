const express = require("express");
const usrctrl = require('../controller/user-controller');
const router = express.Router();
const uploads = require('../models/uploads');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



router.post('/signup', usrctrl.signupUser);

router.post('/login', usrctrl.loginUser);

router.post('/Home', usrctrl.verifyToken, usrctrl.HomePage);

router.post('/BlogbyUser/:uid', usrctrl.verifyToken, usrctrl.BlogbyUserPage);

router.post('/create', usrctrl.verifyToken, uploads.single('blog_image'), usrctrl.createblog);

router.post('/edit/:bid', usrctrl.verifyToken, uploads.single('blog_image'), usrctrl.editblog);

router.post('/delete/:bid', usrctrl.verifyToken, usrctrl.deleteblog);

router.post('/restore/:bid', usrctrl.verifyToken, usrctrl.restoreblog);

// router.post('/test/:bid', usrctrl.verifyToken, usrctrl.testing);

module.exports = router;