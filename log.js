// Import module events
const EventEmitter = require('events');

const util = require('util');

class Logger {
    log = (msg) => {
        console.log(msg);
        // Call of events
        this.emit('some_event', { id: 1, text: 'Event test text!' });
    };
}
// Extends this class
util.inherits(Logger, EventEmitter);

module.exports = Logger;