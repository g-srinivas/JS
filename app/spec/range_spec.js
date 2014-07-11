describe('range', function() {
    it('should return array of numbers', function() {
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should return range of values ', function() {
        expect(range(4, 10)).toEqual([4, 5, 6, 7, 8, 9]);
    });

    it('should return range of values', function() {
        expect(range(2, 10, 2)).toEqual([2, 4, 6, 8]);
    });
});
