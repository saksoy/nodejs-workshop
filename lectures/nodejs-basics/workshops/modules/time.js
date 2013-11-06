var requiredTime = new Date();

function getCurrentTime() {
    return new Date();
}

function getTimeSinceRequire() {
    return new Date() - requiredTime;
}

exports.requiredTime = requiredTime;

exports.getCurrentTime = getCurrentTime;
exports.getTimeSinceRequire = getTimeSinceRequire;