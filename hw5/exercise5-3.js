const express = require('express');
const {runQuery} = require('./database');

const app = express();
const port = 3000;

app.get('/fare', async (req, res) => {
    try {
        const sql = 'SELECT users.name, ' + 'sum(round(types.fare_rate / 100 * trains.distance / 10, -2)) AS fare '
        + 'FROM trains '
        + 'INNER JOIN types ON types.id = trains.type '
        + 'INNER JOIN tickets ON tickets.train = trains.id '
        + 'INNER JOIN users ON users.id = tickets.user AND users.id = ?';
        const {name, fare} = (await runQuery(sql, [parseInt(req.query.uid, 10)]))[0];

        return res.status(200).send(`Total fare of ${name} is ${fare} KRW.`);
    }
    catch (err) {
        console.error(err);
        return res.status(400);
    } 
});

app.get('/train/status', async (req, res) => {
    try {
        const sql = 'SELECT count(tickets.seat_number) AS occupied, types.max_seats AS maximum '
        + 'FROM trains '
        + 'INNER JOIN tickets ON tickets.train = trains.id AND tickets.train = ? '
        + 'INNER JOIN types ON types.id = trains.type';
        const {occupied, maximum} = (await runQuery(sql, [parseInt(req.query.tid, 10)]))[0];

        return res.status(200).send(`Train ${req.query.tid} is ${occupied < maximum ? 'not sold out': 'sold out'}.`);
    }
    catch (err) {
        console.error(err);
        return res.status(400);
    } 
});

app.listen(port, () => console.log(`Listening on port ${port}...`));