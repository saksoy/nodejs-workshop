var mensa = require("../lib/mensa.js");

mensa(function(err, meals) {
    console.log("Heute in der Mensa " + meals.join(", "));
});