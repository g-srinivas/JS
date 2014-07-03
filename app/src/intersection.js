var intersection = function(){
    var res =_intersect(arguments[0], arguments[1]);
    if(isEmpty(res))
        return [];
    each(rest(arguments, 2), function(arr){
        res = _intersect(res, arr);
    });

    function _intersect(arr1, arr2){
        var common = [];
        each(arr1, function(ele){
            if(indexOf(arr2, ele) >=0)
                common.push(ele);
        });
        return common;
    }
    return res;
};
