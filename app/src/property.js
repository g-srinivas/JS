var property = function(property) {
    return function(obj) {
        return obj[property];
    }
};
