// // const fs = require("fs");

// // const data = fs.readFileSync("read.txt", "utf8");
// // console.log(data);

// const fs = require("fs");
// function readFileContent(filePath) {
//     const data = fs.readFileSync("read.txt", "utf8");
//     console.log(data);
// }

const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`Error reading file: ${err.code}: no such file or directory`);
            } else {
                console.error(`Error reading file: ${err.code}`);
            }
            return;
        }
        console.log("File Content:");
        console.log(data);
    });
}

// Test Cases
readFileContent('read.txt');
// Expected Output: Content of file1.txt

readFileContent('blank.txt');
// Expected Output: (empty string)

readFileContent('abc.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
