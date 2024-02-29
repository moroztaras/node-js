const userName = "Taras";

const sayHi = (userName) => `Hello, my name is ${userName}`;

// Make module for export only variable
// module.exports = userName;

// Make module for export object (variable and function)
module.exports = {
    userName,
    sayHi,
};