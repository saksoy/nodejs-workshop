var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {

    var file = "../fs/files/names.json";

    res.setHeader('Content-Type', 'text/json');
    var names = fs.createReadStream(file, { encoding : "utf-8" });

    //direkt per pipe
    //names.pipe(res);

    //"manuelles" pipen
    names.on("readable", function() {
        res.write(names.read());
    });

    names.on("end", function() {
        res.end();
    });


}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');