var JS = function(obj) {
   if(!( this instanceof JS)){
       return new JS(obj);
   }
    this._value = obj;
};

JS.prototype.value = function() {
    return this._value;
};

JS.has = function(obj, property){
     return obj.hasOwnProperty(property);
};


JS.each = function(arr, func) {
    for(var i = 0; i < arr.length; ++i)
        func(arr[i], i);
};

JS.reduce = function(arr, acc, func){
    var res = acc;
    JS.each(arr, function(value){
        res = func(res, value);
    });
    return res;
};


JS.filter= function(arr,func){
    var result = [];
    JS.each(arr, function(value) {
        if(func(value))
            result.push(value);
    });
    return result;
};

JS.map = function(arr, func) {
    var mapped = [];
    JS.each(arr, function(value){
        mapped.push(func(value));
    });
    return mapped;
};


JS.functions = function(obj) {
    return JS.filter(
        Object.keys(obj),
        function(key) { return typeof obj[key] ==='function';});
};

JS.concat = function(result, arr2) {
   JS.each(arr2, function(ele) {
        result.push(ele);
    });
    return result;
};

JS.addChainingSupport = function(obj) {
    JS.each(JS.functions(obj), function(name) {
        var temp = {};
        temp[name] =  function() {
            this._value =
            JS[name].apply(null,JS.concat([this._value], arguments));
            return this;
        };
        JS.mixin(temp, JS.prototype);
    });
};

JS.mixin = function(source, target) {
    JS.each(Object.keys(source), function(key) {
        if(JS.has(source, key))
            target[key] = source[key];
    });
    if(target === JS) {
        JS.addChainingSupport(source);
    }
};


JS.addChainingSupport(JS);
