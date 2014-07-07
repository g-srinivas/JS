describe('isString', function() {
    it('should return true if empty string was passed', function() {
        expect(isString('')).toBeTruthy();
    });

    it('should return false if null was passed', function() {
        expect(isString(null)).toBeFalsy();
    });

    it('should return false if undefined was passed', function() {
        expect(isString(undefined)).toBeFalsy();
    });

    it('should return false if NaN was passed as argument', function() {
        expect(isString(NaN)).toBeFalsy();
    });

    it('should return false if a value other than string was passed', function() {
        expect(isString(3.0)).toBeFalsy();
    });

    it('should return false if a function was passed as argument', function() {
        expect(isString(function() {})).toBeFalsy();
    });

    it('should return false if an object was passed as argument', function() {
        expect(isString({})).toBeFalsy();
    });

    it('should return true if s string was passed as argument', function() {
        expect(isString('srinu')).toBeTruthy();
    });
});
