describe('concat', function(){
    it('should return [] if [], [] passed', function(){
        expect(concat([], [])).toEqual([]);
    });

    it('should concatenate two arrays and return the concatenated array', function(){
        expect(concat([1, 2], [4, 5])).toEqual([1, 2, 4, 5]);
    });

    it('should concatenate arrays', function(){
        expect(concat([1, 2], [3, [4,5]])).toEqual([1, 2, 3, [4, 5]]);
    });
});
