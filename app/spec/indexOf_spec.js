describe('indexOf', function(){
    it('sould return -1 if [] was passed', function(){
        expect(indexOf([], 2)).toEqual(-1);
    });

    it('should return -1 if element not found', function(){
        expect(indexOf([1,2,3], 4)).toEqual(-1);
    });

    if('should return index of element if elemlent found', function(){
        expect(indexOf([1, 2, 3],3)).toEqual(2);
    });
});
