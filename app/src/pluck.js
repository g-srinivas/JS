var pluck = function(arr, property) {
    var result = [];
    each(arr, function(obj){
        if(has(obj, property))
            result.push(obj[property]);
    });
    return result;
};
