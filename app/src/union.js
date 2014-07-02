var union = function(){
    var res = [];
    function _union(arr){
        each(arr, function(ele){
            if(indexOf(res, ele) === -1){
                res.push(ele)
            }
        });
    }
    each(arguments, function(arr){
        _union(arr);
    })
   return res;
};
