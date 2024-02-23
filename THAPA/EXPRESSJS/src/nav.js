const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to my Home Page");
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to my About Page");
});

app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to my CONTACT Page");
});

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});