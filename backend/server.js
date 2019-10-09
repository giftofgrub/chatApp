const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  alert("hi")
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});