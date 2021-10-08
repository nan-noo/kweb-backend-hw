const express = require('express');
const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('login.pug');
})

app.post('/login', (req, res) => {
    const response = Object.keys(req.body).map(key => `${key}: ${req.body[key]}`).join('<br/>');
    res.send(response);
})

app.listen(port, () => console.log(`Listening on port ${port}`));