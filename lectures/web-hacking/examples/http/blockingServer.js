var http = require("http"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {
    var result = 0,
        i;

    console.log("%s %s", req.method, req.url);

    for (i = 0; i < 10000000000; i++) {
        result += i;
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Result: " + i);

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/\n");