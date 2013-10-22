var mensa = require("../lib/mensa.js"),
    exec = require("child_process").exec;

function say(what) {
    exec("say '" + what + "'");
}

mensa(function(err, meals) {
    console.log("Heute in der Mensa " + meals.join(", "));
    say("Heute in der Mensa " + meals.join(", "));
});