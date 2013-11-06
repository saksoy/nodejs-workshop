var http = require("http"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {

    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log("\n");

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/\n");