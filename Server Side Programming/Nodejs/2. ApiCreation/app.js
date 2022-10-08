const http = require('http');
const data = require('./data')

http.createServer((req, res) => {
    // satus code, typeof data sending in response
    res.writeHead(200, { 'Content-Type': 'application\json' });
    // using imported data & converting json data into string 
    res.write(JSON.stringify(data));
    res.end();
}).listen(4600);