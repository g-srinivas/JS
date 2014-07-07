var compose = function() {
    var funcs = reverse(arguments);
    return function() {
        var res = first(funcs).apply(null, rest(arguments, 0));
        each(rest(funcs), function(func) {
            res = func.call(null, res);
        });
        return res;
    }
};
