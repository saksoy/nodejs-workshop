var levelup = require('levelup');

var names = require("./names.json");

var db = levelup('./names');

/**
 * liest alle namen as names.json
 * in die levelDB ein
 * @param callback
 */
function addNamesToDb(callback) {

    var ops = [];

    for(var name in names) {
        if(names.hasOwnProperty(name)) {
            //key = name, value = gender
            //could also be done with streams...
            ops.push({ type: 'put', key: name, value: names[name] });
        }
    }

    db.batch(ops, callback);
}

/**
 * gibt das Geschlecht für <name> zurück
 * @param name
 * @param callback
 */
function getGender(name, callback) {
    db.get(name, callback);
}

/**
 * liest alle keys via ReadStream
 * und gibt die Objekte auf der console aus
 */
function printAllNames() {
    db.createReadStream()
        .on('data', console.log);
}

addNamesToDb(function(err) {

    if(err) {
        console.log(err.message);
    }

    console.log("Added names to DB!");

    getGender("Michael", function(err, gender) {
        console.log("Michael > " + gender);
    });

    printAllNames();
});





