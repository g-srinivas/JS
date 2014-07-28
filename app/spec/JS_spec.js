describe('JS(args)', function() {
    it('should be chainable', function() {
        var filter = function(x) {
            return x % 2 !== 0;
        };
        var map = function(x) {
            return x * 2;
        };
        expect(JS([1, 2, 3]).filter(filter).map(map).value()).toEqual([2, 6]);
        expect(JS.filter([1, 2, 3, 4], filter)).toEqual([1, 3]);
    });
});
