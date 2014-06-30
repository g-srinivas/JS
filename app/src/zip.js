var zip = function() {
    var res = [];
    for(var i = 0; i< maxlength(arguments); ++i){
        var element = [];
        each(arguments, function(obj){
            element.push(obj[i]);
        });
        res.push(element);
    }
    return res;
};

function maxlength(arrays){
    var maxln =  arrays[0].length;
    each(arrays, function(arr){
        if(arr.length > maxln)
            maxln = arr.length;
    });
    return maxln;
}
