var delay = function(func, time) {
    return setTimeout(function() {
        return func.apply(null, rest(arguments, 2));
    }, time);
};
