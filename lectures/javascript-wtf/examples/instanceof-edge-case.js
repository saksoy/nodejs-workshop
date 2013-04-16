var vm = require("vm");
var context = {};

vm.runInNewContext("var arr = []", context);

console.log(context.arr);
console.log(context.arr instanceof Array);
console.log(context.arr instanceof context.Array);