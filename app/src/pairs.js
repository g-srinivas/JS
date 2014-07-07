var pairs = function(obj) {
    var res = [];
    each(Object.keys(obj), function(key) {
        if(typeof obj[key] ==='object') {
            var temp = [];
            res.push([key,  temp]);
            concat(temp, pairs(obj[key]));
        }
        else
            res.push([key, obj[key]]);
    });
    return res;
};
