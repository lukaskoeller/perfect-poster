import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';

const PORT = 8081;

const wss = new WebSocket.Server({ port: PORT });

let sessions = [];

/**
 * newGame
 * @param {string} sessionId
 */
const newGame = (sessionId) => {
  const gameId = uuidv4();

  console.log(`Game ID: ${gameId}\nSession ID: ${sessionId}`);

  return {
    gameId,
    players: [],
  }
};

/**
 * newSession
 */
const newSession = () => {
  const sessionId = uuidv4();

  const session = {
    sessionId,
    games: newGame(sessionId),
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