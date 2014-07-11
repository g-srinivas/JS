describe('isUndefined', function() {
    it('should return true if undefined passed as argument', function() {
        expect(isUndefined(undefined)).toEqual(true);
    });

    it('should return false if a string literal undefined passed', function() {
        expect(isUndefined('undefined')).toEqual(false);
    });

    it('should return false if null passed as argument', function() {
        expect(isUndefined(null)).toEqual(false);
    });

    it('should return false if empty string passed as argument', function() {
        expect(isUndefined(null)).toEqual(false);
    });
});
