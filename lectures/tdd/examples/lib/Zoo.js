function Zoo() {

    /**
     * @type {{}}
     * @protected
     */
    this._park = {};

}

module.exports = Zoo;

//Zoo.prototype.push = function (animal) {
//    this._add("push", animal);
//};
//
//Zoo.prototype.unshift = function (animal) {
//    this._add("unshift", animal);
//};
//
//Zoo.prototype._add = function (method, animal) {
//
//    if (animal.name === "SiberianTiger") {
//        throw new Error("No SiberianTiger!");
//    }
//
//    if (!this._hasAnimal(animal)) {
//        this._createPark(animal);
//    }
//
//    switch (method) {
//        case "push":
//            this._park[animal.name].push(animal);
//            break;
//        case "unshift":
//            this._park[animal.name].unshift(animal);
//            break;
//    }
//
//};
//
//Zoo.prototype._hasAnimal = function (animal) {
//    return Array.isArray(this._park[animal.name]);
//};
//
//Zoo.prototype._createPark = function (animal) {
//    this._park[animal.name] = [];
//};