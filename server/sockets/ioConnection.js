'use strict';

var temporaryValue = 'Write Here!';

function ioConnection(client) {
    client.on('substraction', (item) => {
        client.broadcast.emit('substraction', item);
    });

    client.on('addToItemLimit', (item) => {
        client.broadcast.emit('addToItemLimit', item);
    });
};

module.exports = ioConnection;