// require file system
const fs = require("fs");

// Read file and print contain file
fs.readFile('./test.txt','utf8', (error, data) => {
    console.log(data);
});

console.log('Just text!');

// Write file
fs.readFile('./test.txt','utf8', (error, data) => {
    // Make new dir
    fs.mkdirSync('./files',()=>{});
    //Write data in test2.txt
    fs.writeFileSync('./files/test2.txt',`${data} New text`, ()=> {
        error ? console.log(error):null;
    });
});