
var http = require('http');

var server = http.createServer().listen(1337);

server.on("request", function(req, res) {

    console.log("request received: ", req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

console.log('Server running at http://127.0.0.1:1337/');