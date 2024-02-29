// require file system
const fs = require("fs");

// Read file and print contain file
fs.readFile('./test.txt','utf8', (error, data) => {
    console.log(data);
});

// console.log('Just text!');

// Write file
fs.readFile('./test.txt','utf8', (error, data) => {
    // Make new dir
    fs.mkdirSync('./files',()=>{});
    //Write data in test2.txt
    fs.writeFileSync('./files/test2.txt',`${data} New text`, ()=> {
        error ? console.log(error):null;
    });
});

// Remove file
setTimeout(() => {
    // Check exist file
    if (fs.existsSync("./files/test2.txt")) {
        fs.unlink("./Files/test2.txt", () => {
            console.log('file was removed')
        });
    }
}, 4000);

// Remove dir
setTimeout(() => {
    // Check exist dir
    if (fs.existsSync("./files")) {
        fs.rmdir("./files", () => {
            console.log('Dir was removed')
        });
    }
}, 6000);