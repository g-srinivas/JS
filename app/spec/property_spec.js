describe('property', function() {
    it('should return undefiend if {} was passed', function() {
        expect(property('name')({})).toBeUndefined();
    });

    it('should return undefinedif the property does not exists in object', function() {
        var obj = {age : 45};
        expect(property('name')(obj)).toBeUndefined();
    });

    it('should return property value if the property exists in object', function() {
        expect(property('name')({name : 'srinu'})).toEqual('srinu');
    });
});
