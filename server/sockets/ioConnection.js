'use strict';

var temporaryValue = 'Write Here!';

function ioConnection(client) {
    client.on('substraction', (item) => {
        client.broadcast.emit('substraction', item);
    });
};

module.exports = ioConnection;