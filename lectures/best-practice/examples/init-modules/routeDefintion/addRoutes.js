var db = require("./db.js"),
    server = require("./server");

function printAppTitle(req, res) {

    var app = server();
    res.send(app.get("title"));
}

function printFoo(req, res){

    var app = server();

    var appTitle = app.get("title");

    var dbInstance = db.instance;

    dbInstance.get('foo', function (err, value) {

        if (err) {
            res.send('foo does not exist');
            return;
        }

        res.send(appTitle + " has foo => " + value);
    });
}

function addRoutes() {

    var app = server();

    app.get("/", printFoo);
    //more routes here...
}


module.exports = addRoutes;