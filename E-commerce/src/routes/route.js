const express = require("express");
const router = express.Router();
const usrctrl = require('../controller/user-controller');

const Token = require('../middleware/token')

router.post('/signup', usrctrl.signupUser);

router.post('/login', usrctrl.loginUser);

router.post('/Home', Token.verifyToken, usrctrl.HomePage);

module.exports = router;