describe('flatten', function() {
    it('should return [] if [] was passed', function(){
        expect(flatten([])).toEqual([]);
    });

    it('should return flatten array', function(){
        expect(flatten([1,[2,[10,11]],[4],[5,"srinu"],[]])).toEqual([1, 2, 10, 11, 4, 5, "srinu"]);
    });
});
