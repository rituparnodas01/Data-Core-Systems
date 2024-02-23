const fs = require("fs");

// fs.mkdir('osmodule', (err) => {
//     console.log("folder created");
// })


fs.writeFile("./Ritu/index.js", (err) => {
    console.log("Files Created");
});


// fs.appendFile("./Ritu/bio.txt"," I'm trying append somrthing", (err) => {
//     console.log("Successfully appended")
// })


// fs.readFile("./Ritu/bio.txt", 'utf-8', (err, data) => {
//     console.log(data)
// })


// fs.rename("./Ritu/bio.txt", "./Ritu/myBio.txt", (err) => {
//     console.log("rename done")
// })


// fs.unlink("./Ritu/myBio.txt", (err) => {
//     console.log("Deleted")
// }) 


// fs.rmdir("./Ritu", (err) => {
//     console.log("Directory removed")
// })