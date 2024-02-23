const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 8000;

// console.log(__dirname);

// console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// builtin middleware
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath));

// template engine route

app.get("/", (req, res) => {
    res.render("index");
})

// app.get("/", (req, res) => {
//     res.send("Hello there");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

// app.get("/about", (req, res) => {
//     res.send("Hello, this is about page");
// });

// app.get("/yt", (req, res) => {
//     res.render("yt");
// });

app.get("*", (req, res) => {
    res.render("404",{
        errorcomment: "Oops page couldn't be found",
    });
});

app.listen(8000, () => {
    console.log(`listening to the port number ${port}`);
});