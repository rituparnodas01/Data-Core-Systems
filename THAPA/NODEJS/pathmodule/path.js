const path = require("path");

console.log(path.dirname("C:/Users/dasri/OneDrive - vitap.ac.in/DataCore/THAPA/pathmodule/path.js"));
console.log(path.extname("C:/Users/dasri/OneDrive - vitap.ac.in/DataCore/THAPA/pathmodule/path.js"));
console.log(path.basename("C:/Users/dasri/OneDrive - vitap.ac.in/DataCore/THAPA/pathmodule/path.js"));


// console.log(path.parse("C:/Users/dasri/OneDrive - vitap.ac.in/DataCore/THAPA/pathmodule/path.js"));

const mypath = path.parse("C:/Users/dasri/OneDrive - vitap.ac.in/DataCore/THAPA/pathmodule/path.js");
console.log(mypath.root)