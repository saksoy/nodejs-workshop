var mood = "grumpy";

function get() {
    return mood;
}

function set(newMood) {
    mood = newMood;
}

exports.get = get;
exports.set = set;
exports.mood = mood;