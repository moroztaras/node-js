// require file system
const fs = require("fs");

// Read file and print contain file
fs.readFile('./test.txt','utf8', (error, data) => {
    console.log(data);
});

console.log('Just text!');