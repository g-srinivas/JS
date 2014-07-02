describe('unique', function(){
    it('should return [] if [] was passed', function(){
        expect(unique([])).toEqual([]);
    });

    it('should return unique elements of the array', function(){
        expect(unique([1, 2, 2, 1, 3])).toEqual([1, 2, 3]);
    });
});
