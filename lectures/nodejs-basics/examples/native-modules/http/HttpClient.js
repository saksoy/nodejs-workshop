var https = require("https");

var aufgabenUrl = "https://raw.github.com/hsa-nodejs-workshop/aufgaben/master/README.md";

var aufgabenRequest = https.get(aufgabenUrl, function(res) {

    console.log("Got response: " + res.statusCode);

    //DATA-Stream
    res.on('data', function (chunk) {
        console.log('Aufgaben: ' + chunk);
    });

    res.on('end', function() {
        console.log("Fertig geladen.");
    });
});

aufgabenRequest.on('error', function(e) {
    console.log("Got error loading 'Aufgaben': " + e.message);
});