var compose = function() {
    var funcs = reverse(arguments);
    return function() {
        var res = first(funcs).apply(null, rest(arguments, 0));

        reduce(rest(funcs), res, function(res, func) {
            return (func(res));
        });
        return res;
    }
};
