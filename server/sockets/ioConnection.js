'use strict';

var temporaryValue = 'Write Here!';

function ioConnection(client) {
    console.log('client connected and I am happy!');
    client.emit('inputedData', temporaryValue);

    client.on('inputedData', (inputedData) => {
        temporaryValue = inputedData;
        client.broadcast.emit('inputedData', inputedData);
    });
};

module.exports = ioConnection;