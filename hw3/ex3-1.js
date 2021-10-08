const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const query = req.query;
    const response = Object.keys(query).map(key => `${key}: ${query[key]}`).join('\n');
    res.send(response);
})

app.post('/', (req, res) => {
    const body = req.body;
    const response = Object.keys(body).map(key => `${key}: ${body[key]}`).join('\n');
    res.send(response);
})

app.put('/', (req, res) => {
    const body = req.body;
    const response = Object.keys(body).map(key => `${key}: ${body[key]}`).join('\n');
    res.send(response);
})

app.delete('/', (req, res) => {
    const body = req.body;
    const response = Object.keys(body).map(key => `${key}: ${body[key]}`).join('\n');
    res.send(response);
})

app.listen(port, () => console.log(`Listening on port ${port}`));