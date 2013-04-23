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

wolpi.on("growl", function(growl) {
    console.log(this.name + " growled: " + growl);
});

wolpi.growl();