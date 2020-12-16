import express from 'express';
import cors from 'cors';
import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';

const URL = 'http://localhost';
const APP_PORT = 8081;
const WSS_PORT = 8082;

const app = express();
const wss = new WebSocket.Server({ port: WSS_PORT });

let sessions = [];

app.use(cors());
app.listen(APP_PORT, () => {
  console.log(`APP is listening at http://localhost:${APP_PORT}`);
});

app.get('/join/:id', (req, res) => {
  console.log(`Try to join session ${req.params.id}`);
  console.log(sessions.find((session) => session.id === req.params.id ));
});

/**
 * newGame
 * @param {string} id
 */
const newGame = (id) => {
  const gameId = uuidv4();

  console.log(`Game ID: ${gameId}\nSession ID: ${id}`);

  return {
    id,
    players: [],
  }
};

/**
 * newSession
 */
const newSession = () => {
  const id = uuidv4();

  const session = {
    id,
    games: [],
  };

  sessions.push(session);
  return session;
};

wss.on('connection', function connection(ws) {
  console.log(`Connected to websocket.`);

  ws.on('message', function incoming(message) {
    switch (message) {
      case 'newSession':
        ws.send(JSON.stringify(newSession()));
        break;
    
      default:
        break;
    }
  });
});