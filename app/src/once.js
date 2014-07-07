var once = function(func) {
    var executed = false;
    return function(){
        if(!executed) {
            func.apply(null, rest(arguments, 0));
            executed = true;
        }

    };
};
