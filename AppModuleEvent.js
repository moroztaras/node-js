// Import file log
const Logger = require('./log');

// Create new object
const logger = new Logger();

// Create own event
logger.on('some_event', (args) => {
    const { id, text } = args;
    console.log(id, text);
});

logger.log('User Logged!');
