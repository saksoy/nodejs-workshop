function myFunction(firstArg, secondArg, thirdArg) {
    console.log(firstArg, secondArg, thirdArg);
    console.log(arguments);
}

myFunction("a", "b", "c", "d");
myFunction("a", "b");