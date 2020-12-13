console.log("Welcome to perfect poster!");

import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/newgame', (req, res) => {
    console.log('Send all services');
});

app.listen(port, () => {
    console.log(`perfect poster listening at http://localhost:${port}`);
});