describe('filter',function() {
    it('if empty arry passed, return empty array', function(){
        expect(filter([], function() {})).toEqual([]);
    });

    it('if arry and function passed should return values for which the given predicate is true', function() {
        expect(filter([1,2,3,4],function(x) { return x % 2 === 0; })).toEqual([2,4]);
    });
    it('should return [] if no matching element was found', function() {
        expect(filter([1,3,5,7,9], function(x) { return x % 2 === 0; })).toEqual([]);
    });

});
