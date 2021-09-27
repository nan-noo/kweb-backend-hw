const http = require('http');


const hostName = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contet-Type', 'text/plain');
    res.end('Hello Worrld\n');
});

server.listen(port, hostName, () => {
    console.log(`Server Running at http://${hostName}:${port}`);
})