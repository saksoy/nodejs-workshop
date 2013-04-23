var mensa = require("../lib/mensa.js");

mensa(function(err, meals) {
    console.log("Morgen in der Mensa: " + meals.join(", "));
});