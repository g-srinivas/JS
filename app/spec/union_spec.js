describe('union', function(){
    it('should return union of two arrays', function(){
        expect(union([1, 2, 3],[2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});
