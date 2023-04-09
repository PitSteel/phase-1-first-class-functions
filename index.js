function receivesAFunction(callback) {
    return (callback())
}

function returnsANamedFunction(someValue) {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {};
}


