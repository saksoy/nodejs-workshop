var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {

    var file = "../fs/files/names.json",
        names = fs.createReadStream(file, { encoding : "utf-8" });

    res.setHeader('Content-Type', 'text/json');

    //exactly the same as streamingServer
    //pipe is just a nice shortcut
    names.pipe(res);

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');