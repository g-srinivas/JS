var flatten = function(arr,  res) {
    res = res || [];
     each(arr, function(obj) {
            if(Array.isArray(obj))
                flatten(obj, res);
            else res.push(obj);
     });
    return res;
};
