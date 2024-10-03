const receivesAFunction = (callback) => {
    callback();
};

const returnsANamedFunction = () => {
    function namedFunction() {
        console.log("My function.");
    }
    return namedFunction;
};

const returnsAnAnonymousFunction = () => {
    return function() {
        console.log("Louis has writen an anonymous function.");
    };
};