var flatten = function(array) {
    var res = [];
    function _flatten(res, arr){
        each(arr, function(obj) {
            if(Array.isArray(obj))
                _flatten(res, obj);
            else res.push(obj);
        });
        return res;
    }
    return _flatten(res, array);
};
