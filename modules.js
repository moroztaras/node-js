// Import variable form module
// const user = require('./test.js');
// console.log(user)

// Import variable and function form module
const {userName: user, sayHi} = require('./test.js');

console.log(user);

const name = "Tommy";

console.log(sayHi(name));

// Export variable from this module
module.exports = name;

// Import module OS
const os = require("os");
// Show info about platform and release
console.log(os.platform(), os.release());