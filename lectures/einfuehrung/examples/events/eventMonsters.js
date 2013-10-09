var EventEmitter = require("events").EventEmitter,
    util = require("util");

var Monster = function(name) {
    this.name = name;
};

util.inherits(Monster, EventEmitter);

Monster.prototype.growl = function() {
    //event emitter
    this.emit("growl", "BOOOAARRR");
};

var kingKong = new Monster("KingoKong");

//event listener
kingKong.on("growl", function(growl) {
    console.log("Oh My God! KingKong growled: " + growl);
});

setTimeout(function() {
    kingKong.growl();
},1000);
