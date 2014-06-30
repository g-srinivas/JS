var reduce = function(arr, acc, func){
    var res = acc;
    each(arr, function(value){
        res = func(res, value);
    });
    return res;
};
