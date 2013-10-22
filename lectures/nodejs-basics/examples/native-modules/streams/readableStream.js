var fs = require("fs");

var file = "../fs/files/names.json";

var namesStream = fs.createReadStream(file, { encoding : "utf-8" });

namesStream.on("readable", function() {
    console.log(namesStream.read());
});

namesStream.on("end", function() {
    console.log("end");
});

namesStream.on("error", function(e) {
    throw e;
});