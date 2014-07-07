var compose = function() {
    var funcs = reverse(arguments);
    return function() {
        return reduce(rest(funcs),
                       first(funcs).apply(null, rest(arguments, 0)),
                       function(res, func) {
                           return (func(res));
                       });
    }
};
