var http = require("http"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {

    req.pipe(res);

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");