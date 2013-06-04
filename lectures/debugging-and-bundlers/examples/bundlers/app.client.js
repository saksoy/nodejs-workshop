"use strict";

var someModule = require("./someModule.js"),
    http = require("http");

http.get({ host: location.hostname }, function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});