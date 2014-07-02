var unique = function(arr){
    var res = [];
    each(arr, function(ele){
        if(indexOf(res, ele) === -1){
            res.push(ele);
        }
    });
    return res;
};
