var fs = require("fs");

console.log("Hello!");

var names = {};

var namesJSON = fs.readFileSync("./names.json");
names = JSON.parse(namesJSON);
console.log("parsing done.");

console.log("We've got " + Object.keys(names).length + " names in memory");