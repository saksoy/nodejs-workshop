var fs = require("fs");

console.log("Hello!");

var names = {};

fs.readFile("./names.json", function(err, namesJSON) {
    names = JSON.parse(namesJSON);
    console.log("parsing done");
    console.log("We've got " + Object.keys(names).length + " names in memory");
});

