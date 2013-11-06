var http = require("http"),
    path = require("path"),
    fs = require("fs");

var imgFile = path.resolve(__dirname, "../../../javascript-wtf/img/the-good-2.jpg"),
    server;

server = http.createServer();
server.on("request", function onRequest(req, res) {

    fs.createReadStream(imgFile).pipe(res);

}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");



// Dirty hack to delay the data
// Don't try this at home, dude
fs.ReadStream.prototype.pipe = function (writable) {
    var self = this,
        data;

    this.on("readable", function onReadable() {
        setInterval(function () {
            data = self.read(16);
            console.log(data);
            writable.write(data);
        }, 5);
    });
};