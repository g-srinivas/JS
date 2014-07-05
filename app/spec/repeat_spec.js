describe('repeat', function(){
    it('should execute the specified function 0 times', function(){
        var i = 0;
        repeat(3, function(index){
            expect(i++).toEqual(index);
        })
    });
});
