describe('mixin', function() {
    it('should add functions from source object to destination obj', function() {
        expect(JS.has(JS.prototype, 'add')).toEqual(false);
        JS.mixin({add : function(x, y) {return x + y;}}, JS.prototype);
        expect(JS.has(JS.prototype,'add')).toEqual(true);
        expect(JS.prototype.add(3, 4)).toEqual(7);
     });
    it('should add functions to prototype if the target  is JS', function() {
        var inc = function(x) {
            return ++x;
        };
        JS.mixin({inc: inc}, JS);
        expect(JS(4).inc().value()).toEqual(5);
    });
});
