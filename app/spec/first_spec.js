describe('first', function(){
    it('should return undefined if [] was passed', function(){
        expect(first([])).toBeUndefined();
    });

    it('should return first element if only array was passed', function(){
        expect(first([1, 2, 3])).toEqual(1);
    });

    it('should return all elments  n > size of array', function(){
        expect(first([1, 2, 3, 4, 5], 13)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return first n elements of array', function(){
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    it('should exclude last n elements if n < 0 ', function(){
        expect(first([1, 2, 3, 4], -1)).toEqual([1, 2, 3]);
    });

    it('should return [] if n = 0', function(){
        expect(first([1, 2, 3], 0)).toEqual([]);
    });
});
