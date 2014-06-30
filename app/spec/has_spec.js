describe('has', function() {
    it('should return false if {} was passed', function(){
        expect(has({}, "name")).toBeFalsy();
    });
    it('shuld return false if property not exists in the object', function() {
        expect(has({name:'srinu'}, "age")).toBeFalsy();
    });
    if('should return true if property exists', function(){
        expext(has({name:'srinu'}, "name")).toBeTruthy();
    });
});
