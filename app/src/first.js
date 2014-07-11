var first = function(arr, n) {
    if(isUndefined(n))
        return arr[0];
    var upto = n;
    if(n < 0)
        upto = n + arr.length;
    if(n > arr.length)
        upto = arr.length;

    var res = [];
    each(range(upto), function(i) {
        res.push(arr[i]);
    });
    return res;
};
