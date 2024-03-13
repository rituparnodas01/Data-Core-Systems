const { sequelize, QueryTypes, Op } = require('sequelize');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const app = express();
app.use(cookieParser());

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.use(express.static('uploads'));

var db = require('../models/index');

var User = db.user;
var Blog = db.blog;



// Cookie verification middleware
const verifyToken = (req, res, next) => {

    // console.log("HERE");
    // Extract token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        // No token found, send 401 Unauthorized response
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            // Invalid token, send 401 Unauthorized response
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Token is valid, proceed to the next middleware or route handler
        req.userId = decoded.userId;
        req.email = decoded.email;
        next();
    });
};








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
            res.status(200).json({ message: "Successfully SignedUp in", token: token });
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
        res.status(500).send(error);
    }

}

var HomePage = async (req, res) => {
    try {
        var data = await Blog.findAll({



        })

        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);

    }

};



var BlogbyUserPage = async (req, res) => {
    try {
        const { uid } = req.params;
        var data = await Blog.findAll({
            where: {
                UserId: uid
            }
        }
        )

        res.status(200).json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message || e);

    }
}

var createblog = async (req, res) => {
    try {
        
        const { blog_heading, blog_content } = req.body;
        const blog_image = req.file.filename;

        console.log({ blog_heading, blog_content, blog_image });

        var data = await Blog.create({ blog_heading, blog_content, blog_image, UserId: req.userId });

        console.log(data);

        res.status(200).json({ data });
        // res.status(200).send("Blog Created");
    } catch (error) {
        res.status(400).send(error.message || error);
    }

};

var editblog = async (req, res) => {
    try {
        const { bid } = req.params;
        const { blog_heading, blog_content } = req.body;
        const blog_image = req.file ? req.file.filename : null;
        if (req.email == "Admin@admin.admin") {
            var data = await Blog.update({ blog_heading, blog_content, blog_image }, {
                where: {
                    UserId: req.userId,
                    blog_id: bid
                }
            });
        }
        else {
            var data = await Blog.update({ blog_heading, blog_content, blog_image }, {
                where: {
                    UserId: req.userId,
                    blog_id: bid
                }
            });

        }
        console.log(data);

        res.status(200).json({ data });

    } catch (error) {
        res.status(400).send(error.message || error);
    }
}

var deleteblog = async (req, res) => {
    try {
        // const { uid } = req.params;
        const { bid } = req.params;
        if (req.email == "Admin@admin.admin") {
            await Blog.destroy({
                where: {
                    blog_id: bid
                }

            });
        }
        else {
            var data = await Blog.destroy({
                where: {
                    UserId: req.userId,
                    blog_id: bid
                }

            });
        }

        res.status(200).json({ data });

    } catch (error) {
        res.status(400).send(error.message || error);

    }
}



var restoreblog = async (req, res) => {
    try {
        // const { uid } = req.params;
        const { bid } = req.params;

        var data = await Blog.restore({
            where: {
                UserId: req.userId,
                blog_id: bid
            }
        });

        console.log(data);

        res.status(200).json({ data });

    } catch (error) {
        res.status(400).send(error.message || error);

    }
}






module.exports = {
    verifyToken,
    signupUser,
    loginUser,
    HomePage,
    BlogbyUserPage,
    createblog,
    editblog,
    deleteblog,
    restoreblog,
    // testing
}