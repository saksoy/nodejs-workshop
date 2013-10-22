function getDate() {
    return new Date().toISOString();
}

function printDate() {
    setTimeout(function() {
        process.stdout.write("It is: " + getDate() + "\n", printDate);
    }, 1000);
}

printDate();


