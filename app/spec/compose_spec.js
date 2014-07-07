describe('compose', function() {
    it('should return composition of functions', function() {
        function inc(x) {
            return ++x;
        }
        function dec(x) {
            return --x;
        }
        function add(x, y) {
            return x + y;
        }
        expect(compose(dec, inc, add)(4, 5)).toEqual(9);
    });
});
