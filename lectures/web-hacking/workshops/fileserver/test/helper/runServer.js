"use strict";

require("../../app/start.js")
    .on("listening", function () {
        process.send("server ready");
    });