describe('isNumber', function() {
    it('should return true if NaN is passed as argument', function() {
        expect(isNumber(NaN)).toBeTruthy();
    });

    it('should return true if integer value is passed', function() {
        expect(isNumber(2)).toBeTruthy();
    });

    it('should return true if a floating point value is passed', function() {
        expect(isNumber(10.4)).toBeTruthy();
    });


    it('should return false if null value is passed', function() {
        expect(isNumber(null)).toBeFalsy();
    });


    it('should return false if undefiend is passed', function() {
        expect(isNumber(undefined)).toBeFalsy();
    });

    it('should return false if string value is passed', function() {
        expect(isNumber('foo')).toBeFalsy();
    });


    it('should return false if an object is passed', function() {
        expect(isNumber({})).toBeFalsy();
    });

    it('should return false if a function is passed', function() {
        expect(isNumber(function() {})).toBeFalsy();
    });
});
