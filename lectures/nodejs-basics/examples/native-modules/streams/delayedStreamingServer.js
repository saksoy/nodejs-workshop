var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {

    var file = "../fs/files/names.json",
        namesReadableStream = fs.createReadStream(file, { encoding : "utf-8" });

    res.setHeader('Content-Type', 'application/json');

    namesReadableStream.on("readable", function () {

        res.write(namesReadableStream.read(100));
        namesReadableStream.pause();

        setTimeout(function () {
            namesReadableStream.resume();
        }, 200);
    });

    namesReadableStream.on("end", function () {
        res.end();
    });

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');