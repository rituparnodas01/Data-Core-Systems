const express = require("express");
const app = express();
const bodyParser = require("body-parser")
// require ("../models/user")
// require ("../models/contact")

require("../models/sequelize")


const port = process.env.PORT || 4000;

var userctrl = require("../controllers/userController")

// const sqldblocal = require("../db/sqldb");

app.use(bodyParser.json());
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/add', userctrl.addUser)

app.get('/users', userctrl.getUsers)

app.get('/users/:id', userctrl.getUserbyid)

app.get('/getter', userctrl.getteruser)

app.get('/setter', userctrl.setteruser)

app.get('/virtual', userctrl.virtualuser)

app.get('/validate', userctrl.validateuser)

app.get('/validation', userctrl.validationuser)

app.get('/rawq', userctrl.rawquser)

app.get('/onetoone', userctrl.onetooneuser)

app.get('/onetomany', userctrl.onetomanyuser)

app.get('/manytomany', userctrl.manytomanyuser)

app.get('/paranoid', userctrl.paranoiduser)

app.get('/eloading', userctrl.eloadinguser)

app.get('/aeloading', userctrl.aeloadinguser)

app.get('/insertall', userctrl.insertalluser)

// User.sync();s
// Contact.sync({force : true});


// User.drop();


app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
});