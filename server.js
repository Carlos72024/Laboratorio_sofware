const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log('Servidor WebSocket en funcionamiento en ws://localhost:8080');
