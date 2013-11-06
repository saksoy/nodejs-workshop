var http = require("http"),
    server;

// 1. Erzeugt neue Server-Instanz
server = http.createServer();

// 2. Event-Handler hinzufügen
server.on("request", function onRequest(req, res) {

    console.log("%s %s", req.method, req.url);

    // 4. Request beantworten
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");

});

// 3. Bindet den Server an einen bestimmten Port und Host
server.listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");