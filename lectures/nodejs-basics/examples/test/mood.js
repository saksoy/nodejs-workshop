var mood = "grumpy";

function get() {
    return mood;
}

function set(newMood) {
    mood = newMood;
}

exports.get = get;
exports.set = set;
//erzeugt eine Kopie des String
//keine Referenz zu var mood
exports.mood = mood;