const express = require("express");
const app = express();

require("../models")

const port = process.env.PORT || 7000;

var userctrl = require("../controllers/userController")

app.get('/', function (req, res) {
    res.send("Hello World")
})

// app.get('/addtown', userctrl.addtown)

// app.get('/adddistrict', userctrl.adddistrict)

// app.get('/addstate', userctrl.addstate)

// app.get('/addall', userctrl.addalldata)


// app.get('/data', userctrl.getAll)

app.get('/1-1', userctrl.onetoone)

// app.get('/1-many', userctrl.onetomany)


app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
});