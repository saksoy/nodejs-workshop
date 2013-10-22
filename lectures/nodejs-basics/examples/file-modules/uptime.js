var startDate = Date.now();
console.log("Uptime required at " + startDate);

function uptime() {
    return Date.now() - startDate;
}

module.exports = uptime;