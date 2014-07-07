describe('once', function() {
    it('should return 7', function() {
        var i = 0;
        function inc() {
            i++;
        }
        var f = once(inc);
        f();
        f();
        f();
        expect(i).toEqual(i);
    });

});
