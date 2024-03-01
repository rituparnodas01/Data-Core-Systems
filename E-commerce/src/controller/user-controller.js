const { sequelize, QueryTypes, Op } = require('sequelize');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

var db = require('../models/index');
const product = require('../models/product');
const order = require('../models/order');
const cart = require('../models/cart');
var User = db.user;
var Product = db.product;
var Cart = db.cart;



var signupUser = async (req, res) => {
    try {

        const { name, email, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            return res.json({ message: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        const user = await User.create({ name, email, password: hashedPassword, confirmPassword: hashedPassword });

        if (user) {
            const token = jwt.sign({ userId: user.UserId, email: user.email }, process.env.JWT_SECRET, {

                expiresIn: '1h', // Token expires in 1 hour
            });

            console.log('SignUp successful. Token:', token);
            res.status(200).json({ message: "Successfully SignedUp", token: token });
        }
        else {
            res.status(200).json({ message: "Invalid Password" });
        }

        // res.status(201).json({ UserId, name, email, password, confirmPassword });

    } catch (error) {
        res.status(500).send(error);

    }


}

var loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;



        const checklogin = await User.findAll({
            attributes: ['UserId', 'email', 'password'],
            where: { email: email }
        });

        const passwordMatch = await bcrypt.compare(password, checklogin[0].password);

        if (passwordMatch) {
            const token = jwt.sign({ userId: checklogin[0].UserId, email: checklogin[0].email }, process.env.JWT_SECRET, {
                expiresIn: '1h', // Token expires in 1 hour
            });

            console.log('Login successful. Token:', token);
            res.status(200).json({ message: "Successfully logged in", token: token });
        }
        else {
            res.status(200).json({ message: "Invalid Password" });
        }

        // res.cookie("token", token, { httpOnly: true });

    } catch (error) {
        console.error(error);
        // const errorMessage = 'Sorry :( || No user found';
        res.status(500).send('Sorry :( || No user found');
    }

}


var HomePage = async (req, res) => {
    try {
        var data = await Product.findAll({



        })

        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);

    }

};


var allproductsbycat = async (req, res) => {
    try {
        const { cat } = req.params;
        var data = await Product.findAll({
            where: {
                Product_catagory: cat
            }
        })
        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);
    }

};


var allproductsbycatpriceasc = async (req, res) => {
    try {
        const { cat } = req.params;
        var data = await Product.findAll({
            where: {
                Product_catagory: cat
            },
            order: [
                ['price', 'ASC'] // Sort by price in ascending order
            ]
        })
        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);
    }

};

var allproductsbycatpricedesc = async (req, res) => {
    try {
        const { cat } = req.params;
        var data = await Product.findAll({
            where: {
                Product_catagory: cat
            },
            order: [
                ['price', 'DESC'] // Sort by price in ascending order
            ]
        })
        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);
    }

};

var addtocart = async (req, res) => {
    try {
        const { pid } = req.params;
        const { qty } = req.body;
        var data = await Cart.create({
            qty , UserId: req.userId , ProductId: pid
        })
        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);
    }
}

module.exports = {
    signupUser,
    loginUser,
    HomePage,
    allproductsbycat,
    allproductsbycatpriceasc,
    allproductsbycatpricedesc,
    addtocart
}