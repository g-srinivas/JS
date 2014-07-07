describe('union', function(){
    it('should return [] if [], [] passed', function(){
        expect(union([], [])).toEqual([]);
    });

    it('should return union of two arrays', function(){
        expect(union([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should return union of two arrays; should not include duplicates', function(){
        expect(union([1, 2, 3, 4, 5, 6],[4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    });

    it('should return union of two arrays', function() {
        expect(union([1, 2, 3], [1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});
