describe('isEmpty', function(){
    it('should return true if [] passed', function(){
        expect(isEmpty([])).toBeTruthy();
    });

    it('shuld return false if non empty array passed', function(){
        expect(isEmpty([1])).toBeFalsy();
    });
});
