const fs = require("fs")

const bioData = {
    name : "Rituparno Das",
    age : 26,
    channel : "Ritu",
};

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData)

// console.log(objData.channel);

// fs.writeFile("json1.json", jsonData, (err) =>{
//     console.log("done")
// })

// API

// fs.readFile("json1.json", "utf-8", (err, data) => {
//     console.log(data)
// })


fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(data)
    console.log(orgData)
})