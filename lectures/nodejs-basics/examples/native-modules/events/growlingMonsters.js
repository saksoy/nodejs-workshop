var EventEmitter = require("events").EventEmitter,
    util = require("util");

var Monster = function(name) {
    this.name = name;
};

Monster.prototype.name = "Monster";

util.inherits(Monster, EventEmitter);

Monster.prototype.growl = function() {
    this.emit("growl", "BOOOAARRR");
};

var wolpi = new Monster("Wolperdinger");
var giantPigeon = new Monster("GiantPigeon");

giantPigeon.growl = function() {
    this.emit("growl", "GURUUU GURUUU");
};

function growlHandler(growl) {
    console.log(this.name + " growled: " + growl);
}

//use the same function to handle growls
wolpi.on("growl", growlHandler);
giantPigeon.on("growl", growlHandler);

//Giant Pigeon will growl back once
wolpi.on("growl", function() {
    //the Pigeon will growl back!
    setTimeout(function() {
        giantPigeon.growl();
    }, 2000);
});

wolpi.growl();