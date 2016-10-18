'use strict';

var temporaryValue = 'Write Here!';

function ioConnection(client) {
    console.log('client connected.io and I am happy!');

    client.on('substraction', (item) => {
        console.log('got', item);
        client.broadcast.emit('substraction', item);
    });
};

module.exports = ioConnection;