const express = require("express");
const cors = require('cors');
const app = express();
const router = require('./routes/route');
const port = process.env.PORT || 2000;
require("./models/index")
app.use(express.json());
app.use(cors());



// Assuming that our E-coomerce site name is Flipzone
app.use('/Flipzon', router);

app.get('/', (req, res) => {
    res.send('Hello World!!!')
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
  });