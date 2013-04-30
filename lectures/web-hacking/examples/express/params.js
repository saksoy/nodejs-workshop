var express = require('express');
var app = express();

//unsere monster "Datenbank"
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

//springt immer an wenn :monster in einer route definiert ist
app.param('monster', function loadMonster(req, res, next, id){

    if(monsters[id] === undefined) {
        next(new Error("Monster with id " + id + " does not exist."));
        return;
    }

    //wir hängen das monster an das Request-Object
    req.monster = monsters[id];
    next();
});

app.get("/monster/:monster", function(req, res, next) {
    //die monster-param middleware wurde automatisch ausgeführt
    //wir können also direkt auf req.monster zugreifen
    res.send(req.monster.name + " aged " + req.monster.age);
});

app.listen(3000);