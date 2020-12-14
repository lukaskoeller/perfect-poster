import WebSocket from 'ws';

const PORT = 8081;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
  console.log(`Connected to websocket.`);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});