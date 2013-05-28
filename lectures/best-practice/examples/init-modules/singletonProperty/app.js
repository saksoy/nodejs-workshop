var express = require('express');

var database = require("./db.js"),
    routes = require("./routes.js");

var app = express();

//routen definieren
app.get('/', routes.printFoo);

//datenbank initialisieren
database.connect(function(err) {

    if(err) {
        throw err;
    }

    var db = database.instance;

    //foo setzen
    db.put("foo", "bar", function(err) {

        if(err) {
            throw err;
        }

        //server starten
        app.listen(3000);
        console.log("server running on port 3000");
    });
});