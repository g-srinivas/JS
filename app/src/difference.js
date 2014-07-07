var difference = function(){
    return reduce(rest(arguments), first(arguments), function(res, arr) {
        var diff = [];
        each(res, function(ele) {
            if(indexOf(arr, ele) === -1)
                diff.push(ele);
        });
        return diff;
    });
};
