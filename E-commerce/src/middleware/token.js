const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const app = express();
app.use(cookieParser());




// Cookie verification middleware
const User_Verification = (req, res, next) => {

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
        req.useremail = decoded.useremail;
        next();
    });
};




const Seller_Verification = (req, res, next) => {

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
        req.sellerId = decoded.sellerId;
        req.selleremail = decoded.selleremail;
        next();
    });
};

module.exports = {User_Verification, Seller_Verification}