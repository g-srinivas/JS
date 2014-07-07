var flatten = function(arr) {
    var res = [];
     each(arr, function(obj) {
         if(Array.isArray(obj))
             concat(res, flatten(obj));
         else
             res.push(obj);
     });
    return res;
};
