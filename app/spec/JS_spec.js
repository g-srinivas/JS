describe('JS(args)', function() {
    it('should be chainable', function() {
        var filter = function(x) {
            return x % 2 !== 0;
        };
        var map = function(x) {
            return x * 2;
        };

        expect(JS([1, 2, 3])
               .filter(filter)
               .map(map).value()).toEqual([2, 6]);
        expect(JS([1, 2, 3])
              .reduce(0, function(x, y) { return x + y;})
              .value()).toEqual(6);
    });
});
