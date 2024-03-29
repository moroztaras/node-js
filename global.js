// Global object
//console.log(global);

// Create timer - show message for 3 sec
// setTimeout(() => {
//  console.log("Hello Node JS!");
// }, 3000);

// Get rout to this dir
// console.log(__dirname);

// Get rout to this file
// console.log(__filename);

// Show object process
// console.log(process);

// Show object process.env
// console.log(process.env);

// Get arguments command line
// console.log(process.argv);

// Get second argument
// console.log(`Hello ${process.argv[2]}!`);

// Object URL
const url = new URL("https://node-js.com/path/name#test");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);