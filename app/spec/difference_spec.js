describe('difference', function(){
    it('should return [] if first array is []', function(){
        expect(difference([],[1,2,3],[], [])).toEqual([]);
    });

    it('shuld return [] if no difference of arrays from the first array', function(){
        expect(difference([1, 2, 3], [ 1, 2, 3, 5], [4, 5, 2],[3])).toEqual([]);
    });

    it('shuld return set  diff of input arrays from the first array', function(){
        expect(difference([1, 2, 3], [2, 4, 6], [4, 5])).toEqual([1, 3]);
    });
});
