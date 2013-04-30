var http = require("http"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // Alternativ auch
    //res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<html><body>");
    res.write("<h1>Hello</h1>");
    res.write("</body></html>");

    // Das wirft einen Fehler
    //res.setHeader("ETag", "737060cd8c284d8af7ad3082f209582d");

    res.end();

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/\n");