var intersection = function(){
    var res = clone(arguments[0]);

     each(arguments, function(arr){
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

function clone(arr1){
    var res = [];
    each(arr1, function(ele){
        res.push(ele);
    });
    return res;
}
