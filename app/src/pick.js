var pick = function(obj, props) {
    var result = {};
    each(props, function(prop) {
        if(has(obj, prop) )
            result[prop] = obj[prop];
    });
    return result;
};
