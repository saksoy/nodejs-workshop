var events = require('events'),
    util = require("util"),
    fs = require("fs");

var JSONReader = function(){
    events.EventEmitter.call(this);
};

util.inherits(JSONReader, events.EventEmitter);

JSONReader.prototype.fromFile = function(path, callback) {

    var self = this;

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {

        //Error Delegation
        if(err) {
            self.emit("error", err);
            return; //never forget return!
        }

        try {
            //JSON.parse might throw an error
            callback(JSON.parse(jsonString));
        }
        catch(err) {
            self.emit("error", err);
        }
    });
};

var jsonReader = new JSONReader();

jsonReader.on("error", function(err) {
   console.log("Error caught: ", err.message);
});

jsonReader.fromFile(__dirname + "/data/valid.json", function(data) {
   console.log("loaded data", data);
});
