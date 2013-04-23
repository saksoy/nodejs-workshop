//view-source:http://augsburg.my-mensa.de/essen.php?v=4555387&mensa=aug_friedbergerstr_fh&hyp=1#aug_friedbergerstr_fh_tag_2013111

var http = require('follow-redirects').http,
    fs = require("fs"),
    jsdom = require("jsdom"),
    moment = require("moment");

function mensa(callback) {

    var aufgabenUrl = "http://augsburg.my-mensa.de/essen.php?mensa=aug_friedbergerstr_fh&hyp=1";

    http.get(aufgabenUrl, function(res) {

        if(res.statusCode !== 200) {
            callback(new Error("Could not load page '" + aufgabenUrl + "' StatusCode "+ res.statusCode));
            return;
        }

        var html = "",
            meals = [];

        //DATA-Stream
        res.on('readable', function () {
            html += res.read();
        });

        res.on('end', function() {

            jsdom.env(
                html,
                ["http://code.jquery.com/jquery.js"],
                function(errors, window) {

                    var selector = "#aug_friedbergerstr_fh_tag_"+  moment().year() + "" + moment().dayOfYear() +".page h3.ct";

                    window.jQuery(selector).each(function() {
                        meals.push(window.$(this).text());
                    });

                    callback(null, meals);
                });

        });
    }).on('error', function(e) {
            callback(e);
        });
}

module.exports = mensa;