const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
})

app.get('/factorial/:number', (req, res) => {
    const number = req.params.number;
    const factorial = n => {
        if(n === 0) return 1;
        let result = 1;
        let i = 1;
        while(i <= n){
            result *= i;
            i++;
        }
        return result;
    };

    res.send(`${number}! = ${factorial(number)}`);
})

app.listen(port, () => console.log(`Listening on port ${port}`));