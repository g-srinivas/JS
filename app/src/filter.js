var filter= function(arr,func){
    var result =[];
    each(arr, function(value) {
        if(func(value))
            result.push(value);
    });
    return result;
};
