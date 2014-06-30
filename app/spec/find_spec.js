describe('find', function() {
    it(' should return undefined if empty array was passed', function() {
        expect(find([], function(x) {})).toBeUndefined();
    });
    it(' sould return first matching element', function() {
        expect(find([1,2,3,4], function(x) { return x % 2  === 0;})).toEqual(2);
    });
    it(' should return undefined if no matching element was found', function() {
        expect(find([1,2,3], function(x) { return x % 5 === 0;})).toBeUndefined();
    });
});
