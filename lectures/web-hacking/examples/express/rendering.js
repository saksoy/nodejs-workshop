var express = require("express"),
    ejs = require("ejs");

var app = express();

var monsters = [
    {
        name : "Godzilla",
        age : 500
    },
    {
        name : "KingKong",
        age : 354
    }
];

//locals sind für bei jedem template verfügbar
app.locals({
  title: 'Monster App',
  creator : "meaku"
});

//so kann man die view-ordner setzen (default = views)
//app.use("views", __dirname + "/views/");


app.param('monster', function loadMonster(req, res, next, id){

    if(monsters[id] === undefined) {
        next(new Error("Monster with id " + id + " does not exist."));
        return;
    }

    //append monster to request
    req.monster = monsters[id];
    next();
});

app.get("/monster/:monster", function(req, res, next) {

    //express sucht in __dirname/views/monster.ejs
    //da die Endung "ejs" ist, nutzt express den ejs renderer
    //dieser muss vorher per npm install ejs installiert werden
    res.render('monster.ejs', req.monster);
});

app.listen(3000);