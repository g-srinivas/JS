var zip = function() {
    var res = [];
    var maxlength = reduce(arguments, 0,  function(acc, arr){
        return max(acc, arr.length);
    });
    var args = arguments;
    repeat(maxlength, function(i){
        var element = [];
        each(args, function(obj){
            element.push(obj[i]);
        });
        res.push(element);
    });
    return res;
};

function max(x, y){
    return x > y ? x : y;
}
