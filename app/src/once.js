var once = function(func) {
    var executed = false;
    var res;
    return function(){
        if(executed)
            return res;
        else {
            res = func.apply(null, rest(arguments, 0));
            executed = true;
            return res;
        }
    };
};
