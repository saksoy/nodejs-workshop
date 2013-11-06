var http = require("http"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {
    var num = 0;

    setInterval(function writeNumber() {

        res.write(String(num++));
        console.log(num);

    }, 10);

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/\n");