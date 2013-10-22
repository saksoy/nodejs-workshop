var fs = require("fs");

var dir = "./files";

fs.readdir(dir, function(err, files) {

    if(err) {
        console.log("Got an error listing '" + dir + "'");
    }

    files.forEach(function(file, idx) {
        console.log(idx + ". " + file);
    });
});