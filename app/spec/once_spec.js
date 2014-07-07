describe('once', function(){
    function add(x, y) {
        return x + y;
    }
    function returnSame(name) {
        return name;
    }
    var oneTime = once(add);
    oneTime(3, 4);
    oneTime(4, 5);
    it('should return 7', function() {
        expect(oneTime(10, 11)).toEqual(7);
    });

    it('should return same name ', function() {
        var f = once(returnSame);
        f('srinu');
        expect(f('ram')).toEqual('srinu');
    });
});
