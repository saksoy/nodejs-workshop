var fs = require("fs");

var file = "./files/notes.md";

fs.readFile(file, "utf-8", function(err, content) {

    if(err) {
        console.log("Error reading file '" + file + "'");
        return;
    }

    console.log("Inhalt: " + content);
});

