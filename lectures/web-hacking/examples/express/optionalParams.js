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

//format als verpflichtenden Parameter
/*
app.get('/user/:id/:format', function(req, res, next){
    res.send("User(" + req.params.id + ") as " + req.params.format);
});
*/

//format als optionalen parameter
app.get("/user/:id/:format?", function(req, res, next){

    res.write("User(" + req.params.id + ")");

    //req.params.format is undefined falls nicht gesetzt
    if(req.params.format) {
        res.write("Format: " + req.params.format);
    }

    res.end();
});

app.listen(3000);