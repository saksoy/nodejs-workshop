var http = require("http"),
    server;

server = http.createServer();

server.on("request", function onRequest(req, res) {

    console.log("%s %s", req.method, req.url);

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");

});

server.listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");