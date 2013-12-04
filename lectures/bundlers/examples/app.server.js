"use strict";

var connect = require("connect");

var app = connect()
        .use(connect.static(__dirname))
        .listen(3000);

console.log("Server running at http://localhost:3000");