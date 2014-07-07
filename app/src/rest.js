var rest = function(arr, index){
    var res = [];
    if(index >= arr.length)
        return res;
    var from  = (isNaN(index) ? 1 : index);
    if(from < 0)
        from = index + arr.length;
    for(var i = from; i < arr.length; ++i){
        res.push(arr[i]);
    }
    return res;
};
