const express = require("express");
const router = express.Router();
const usrctrl = require('../controller/user-controller');

const Token = require('../middleware/token')

router.post('/signup', usrctrl.signupUser);

router.post('/login', usrctrl.loginUser);

router.post('/Home', Token.verifyToken, usrctrl.HomePage);

router.post('/All_Products/:cat', Token.verifyToken, usrctrl.allproductsbycat);

router.post('/All_Productspasc/:cat', Token.verifyToken, usrctrl.allproductsbycatpriceasc);

router.post('/All_Productspdesc/:cat', Token.verifyToken, usrctrl.allproductsbycatpricedesc);

router.post('/Add-to-cart/:pid', Token.verifyToken, usrctrl.addtocart);

module.exports = router;