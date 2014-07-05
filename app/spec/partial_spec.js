describe('partial', function(){
    function add(x, y){
        return x + y ;
    }
    it('should return a function', function(){
        var add2 = partial(add, 4);
        expect(add2(7)).toEqual(11);
    });
});
