describe('zip', function() {
    it('should return [] when passed [], []', function(){
        expect(zip([], [])).toEqual([]);
    });

    it('should return array of arrays', function(){
        expect(zip([1,2],[3,4],[4,5])).toEqual([[1,3,4],[2,4,5]]);
    });

    it('should return undefined for missing values if arrays of different length were supplied', function(){
        expect(zip([1,2],[2])).toEqual([[1,2],[2,undefined]]);
    });
});
