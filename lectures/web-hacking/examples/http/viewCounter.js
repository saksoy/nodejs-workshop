var http = require("http"),
    server;

var views = 0;

server = http.createServer();
server.on("request", function onRequest(req, res) {

    console.log("%s %s", req.method, req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Views: " + (++views));

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/\n");