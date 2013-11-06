var express = require('express');
var app = express();

function printMethod(req, res, next) {
    res.send(req.method + ' Request received');
}

function logRoute(req, res, next) {

    //mit welchem Pfad kam der request
    console.log("route " + req.url);
    //gibt den Request an den nächsten Handler weiter
    next();
}

//springt nur bei GET Anfragen an
app.get("/", printMethod);

//springt nur bei POST Anfragen an
app.post("/", printMethod);

//spring bei ALLEN Anfragen an
app.all("/*", [logRoute, printMethod]);

app.listen(3000);