var http = require('http');
var https = require("https");

var aufgabenUrl = "https://raw.github.com/hsa-nodejs-workshop/aufgaben/master/README.md";

http.createServer(function (req, res) {

    var aufgabenRequest;

    res.setHeader('Content-Type', 'text/html');

    aufgabenRequest = https.get(aufgabenUrl, function(aufgabenRes) {

        var aufgaben = "";

        /*
         //alte stream syntax
         aufgabenRes.on('data', function (chunk) {
         aufgaben += chunk.toString().
         });
         */

        //neue stream syntax
        aufgabenRes.on("readable", function() {
            aufgaben += aufgabenRes.read();
        });

        aufgabenRes.on("end", function() {
            res.end(aufgaben);
        });
    });

    aufgabenRequest.on('error', function(e) {
        res.statusCode = 404;
        res.end("Error loading Aufgaben: " + e.message);
    });

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');