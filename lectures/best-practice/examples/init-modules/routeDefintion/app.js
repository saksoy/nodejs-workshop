var database = require("./db.js"),
    addRoutes = require("./addRoutes.js");

var server = require("./server.js");

//=getInstance call
//with auto init
var app = server();

app.set("title", "app-reference via Singleton");

//setup routes
addRoutes();

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


