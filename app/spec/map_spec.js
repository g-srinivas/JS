describe('map', function() {
    it('if empty array passed, returns empty array', function() {
        expect(map([], function() { })).toEqual([]);
    });

    it('if passed an array and a transform function, returns an array with all values transformed using the transform function', function() {
        expect(map([1, 2, 3], function(e) { return e * 2; }))
            .toEqual([2, 4, 6]);
    });

});
