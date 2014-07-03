describe('intersection', function(){
    it("should return [] if all []'s were passed", function(){
        expect(intersection([], [])).toEqual([]);
    });

    it('should return [] if no common elements in passed arrays', function(){
        expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('should return common elements from all the arrays', function(){
        expect(intersection([1, 2, 3],[2, 3, 4], [3, 4,5])).toEqual([3]);
    });
});
