var reverse = function(arr) {
    var res = [];
    for(var i = arr.length-1; i>=0; --i){
        res.push(arr[i]);
    }
    return res;
}
