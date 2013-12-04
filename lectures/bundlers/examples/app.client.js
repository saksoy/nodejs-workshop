"use strict";

var someModule = require("./someModule.js"),
    http = require("http");

http.get({ host: location.hostname }, function(res) {
  document.body.innerHTML += "Got response: " + res.statusCode;
}).on('error', function(e) {
  document.body.innerHTML += "Got error: " + e.message;
});