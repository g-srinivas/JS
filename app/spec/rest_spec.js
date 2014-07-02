describe('rest', function(){
    it('should return [] if [] was passed', function(){
        expect(rest([])).toEqual([]);
    });

    it('should return [] if start index greater than size of array', function(){
        expect(rest([1, 2], 2)).toEqual([]);
    });

    it('should return last n elemts of array if index < 0', function(){
        expect(rest([1, 2, 3, 4], -2)).toEqual([3, 4]);
    });

    it('should return the all elements of array from the specified index', function(){
        expect(rest([1, 2, 3], 1)).toEqual([2, 3])
    });
});
