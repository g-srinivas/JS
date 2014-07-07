var intersection = function() {
    return reduce(rest(arguments), first(arguments), function(res, arr){
        var common = [];
        each(res, function(ele) {
            if(indexOf(arr, ele) >= 0)
                common.push(ele);
        });
        return common;
    });
};
