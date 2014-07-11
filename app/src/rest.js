var rest = function(arr, index){
    var from  = (isUndefined(index) ? 1 : index);
    if(from < 0)
        from = index + arr.length;
    var res = [];
    each(range(from, arr.length), function(i) {
        res.push(arr[i]);
    });
    return res;
};
