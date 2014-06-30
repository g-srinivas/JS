describe('reduce', function(){
    function plus(x, y){
        return x + y;
    }
    function multiply(x, y){
        return x * y;
    }

    it('reduce should return sum of all array values ',function(){
        expect(reduce([1,2,3], 5, plus)).toEqual(11);
    });
    it('reduce should return sum of all array values', function(){
        expect(reduce([1,2,3], 0, plus)).toEqual(6);
    });
    it('reduce should return accumilator value if [] was passed', function(){
        expect(reduce([], 6, function(){})).toEqual(6);
    });

    it('reduce should return multiplication on all elements of array', function() {
        expect(reduce([1, 2, 3, 4], 1, multiply)).toEqual(24);
    });

    if('should return accumilator value if [] was passed', function() {
        expect(reduce([], 5, multiply)).toEqual(5);
    });

    it('should return concatenated string of all strings in array', function(){
        expect(reduce(["a","b","c"],"", plus)).toEqual("abc");
    });

});
