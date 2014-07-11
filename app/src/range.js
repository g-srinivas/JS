var range = function(start, stop, step) {
    if(isUndefined(stop))
        return range(0, start, step);

    if(isUndefined(step))
        return range(start, stop, 1);
    var res = [];
    while(start < stop){
        res.push(start);
        start += step;
    }
    return res;
};
