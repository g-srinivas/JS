var JS = function(obj) {
   if(!( this instanceof JS)){
       return new JS(obj);
   }
    this._value = obj;
};

JS.prototype.value = function() {
    return this._value;
};

JS.prototype.filter = function(func){
    this._value = JS.filter.apply(null, [this._value, func]);
    return this;
};

JS.filter= function(arr,func){
    var result = [];
    each(arr, function(value) {
        if(func(value))
            result.push(value);
    });
    return result;
};

JS.prototype.map = function(func) {
    this._value = JS.map.apply(null, [this._value, func]);
    return this;
};

JS.map = function(arr, func) {
    var mapped = [];
    each(arr, function(value){
        mapped.push(func(value));
    });
    return mapped;
};
