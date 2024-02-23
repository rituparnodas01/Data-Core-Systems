const express = require("express");

const router = require('./routes/route');

require("./models/index")

// const connection = require('./db/sqldb');

const app = express();
const port = process.env.PORT || 1000;

app.use(express.json());
app.use( express.static('uploads'));


app.use('/blog', router);


app.get('/', (req, res) => {
    res.send('Hello World!!!')
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
  });
