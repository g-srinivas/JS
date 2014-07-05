var partial = function(func){
    var args =rest(arguments,1);
    return function(){
        return func.apply(null, concat(args, rest(arguments, 0)));
    };
};
