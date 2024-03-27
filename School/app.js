const express = require("express");
const cors = require('cors');
const app = express();
// const router = require('./routes/route');
const port = process.env.PORT || 4000;
require("./src/models/index")
app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
  });