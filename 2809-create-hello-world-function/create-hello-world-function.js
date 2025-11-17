/**
 * @return {Function}
 */
var createHelloWorld = function() {
    //DAY !
    return function(...args) {
        return "Hello World";
    }
};

createHelloWorld()();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */