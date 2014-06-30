describe('each', function(){
    it('each should execute the function passed for each element of array', function() {
        var i = 0;
        each([1, 2, 3], function(index, x) { ++i; });
        expect(i).toEqual(3);
    });
    it('each should not execute the function passed if [] was passed', function() {
        var i = 0;
        each([], function(index, x) { expect(i++).toEqual(index); });
    });
});
