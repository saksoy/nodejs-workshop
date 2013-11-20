var levelup = require("level");

var names = require("./names.json");

var db = levelup(__dirname + '/db');

/**
 * kopiert alle namen aus der names.json in die levelDB
 * @param callback
 */
function addNamesToDb(callback) {

    var ws = db.createWriteStream({ type: "put" });

    ws.on("close", callback);
    ws.on("error", callback);

    for (var name in names) {
        if (names.hasOwnProperty(name)) {
            //key = name, value = gender
            ws.write({ key: name, value: names[name] });
        }
    }

    ws.end();
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
function printNamesWithGender() {
    db.createReadStream().on('data', function (data) {
        console.log(data.key + " -> " + data.value);
    });
}

/**
 * liest nur die namen (keys) aus der levelDB
 */
function printNames() {
    db.createReadStream({ keys: true, values: false  }).pipe(process.stdout);
}

/**
 * https://github.com/rvagg/node-levelup#createReadStream
 * ## stream options
 * start
 * end
 * limit
 * reverse
 *
 */

exports.db = db;
exports.addAllNamesFromFile = addNamesToDb;
exports.getGender = getGender;
exports.addNamesToDb = addNamesToDb;
exports.printNamesWithGender = printNamesWithGender;
exports.printNames = printNames;





