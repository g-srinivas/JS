var union = function() {
   return reduce(arguments, [], function(res, arr){
        each(arr, function(ele) {
            if(indexOf(res, ele) === -1)
                res.push(ele)
        });
        return res;
    });
};
