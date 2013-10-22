var http = require('follow-redirects').http,
    fs = require("fs"),
    jsdom = require("jsdom"),
    moment = require("moment");

function mensa(callback) {

    var mensaUrl = "http://augsburg.my-mensa.de/essen.php?mensa=aug_friedbergerstr_fh&hyp=1";

    http.get(mensaUrl, function(res) {

        if(res.statusCode !== 200) {
            callback(new Error("Could not load page '" + mensaUrl + "' StatusCode "+ res.statusCode));
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
                    var selector = "#aug_friedbergerstr_fh_tag_"+  moment().year() + "" + (moment().dayOfYear() - 1) +" h3.ct";

                    window.jQuery(selector).each(function() {
                        meals.push(window.$(this).text().replace(/­/g,""));
                    });

                    callback(null, meals);
                });
        });
    }).on('error', callback);
}

module.exports = mensa;