var db = require("./db.js");

function printFoo(req, res){

    //instance holen, nachdem .connect() aufgerufen wurde
    var dbInstance = db.getInstance();

    dbInstance.get('foo', function (err, value) {

        if (err) {
            res.send('foo does not exist');
            return;
        }

        res.send("foo => " + value);
    });
}

exports.printFoo = printFoo;