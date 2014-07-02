var first = function(arr, n){
    if(isNaN(n))
        return arr[0];
    var upto = n;
    if(n < 0)
        upto = n + arr.length;
    if(n > arr.length)
        upto = arr.length;

    var res = [];
    for(var i = 0; i < upto ; ++i){
        res.push(arr[i]);
    }
    return res;
}
