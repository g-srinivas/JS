describe('reverse', function() {
    it('should return [] if [] was passed', function() {
        expect(reverse([])).toEqual([]);
    });
    it('should return reverse of array', function() {
        expect(reverse([1])).toEqual([1]);
    });

    it('should return reverse of array', function() {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
