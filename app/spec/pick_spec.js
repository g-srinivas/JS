describe('pick', function() {
    it('should return {} if {} was passed', function(){
        expect(pick({}, [])).toEqual([]);
    });

    it('should return object with specified properties', function() {
        expect(pick({x:'x', y:'y', z:23},["x","z"]))
            .toEqual({x:'x', z:23});
    });

    it('should omit non existing properties', function(){
        expect(pick({x:'x', y:'y'}, ["x", "z"])).toEqual({x:'x'});
    });

    it('should include functions also', function(){
        var func = function(){};
        expect(pick({x: func,  y:'y'}, ["x", "y"])).toEqual({x: func, y:'y'});
    });
});
