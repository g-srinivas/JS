var difference = function(){
    var res = _diff(arguments[0], arguments[1]);
    if(isEmpty(res))
        return [];
    each(rest(arguments, 2),function(arr){
        res = _diff(res, arr);
    });
    return res;
    function _diff(arr1, arr2){
        var res = [];
        each(arr1, function(ele){
            if(indexOf(arr2, ele) === -1)
                res.push(ele);
        });
        return res;
    }
};
