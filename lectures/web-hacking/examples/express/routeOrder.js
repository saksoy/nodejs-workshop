var express = require('express');
var app = express();

app.get("*", function(req, res) {
    res.send("handled by * route");
});

app.get("/monsters", function(req, res) {
    res.send("handled by monsters route");
});


app.listen(3000);