var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {

    var file = "../fs/files/names.json",
        names = fs.createReadStream(file, { encoding : "utf-8" });

    res.setHeader('Content-Type', 'text/json');

    //names = readable stream
    names.on("readable", function() {
        //res = writeable stream
        res.write(names.read());
    });

    names.on("end", function() {
        res.end();
    });

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');