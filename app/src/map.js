var map = function(arr, func) {
    var mapped = [];
    each(arr, function(value){
        mapped.push(func(value));
    });
    return mapped;
};
