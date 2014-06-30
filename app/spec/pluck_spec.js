describe('pluck', function() {
    it('should return [] if [] passed', function() {
        expect(pluck([],"")).toEqual([]);
    });

    it('should return array of values of specified property; should ignore functions', function() {
        var func = function(){};
        expect(pluck([{name:'srinu'},{name:func},{name:'ravi'}],"name")).toEqual(["srinu", func, "ravi"]);
    });

    it('should return array of values of property', function() {
        expect(pluck([{name: 'srinu'}, {name:'ravi'}],"name")).toEqual(['srinu','ravi']);
    });

    it('should return array of values of propery ; should ignore the object if it has no such propery', function() {
        expect(pluck([{name:'srinu'},{age:23}],"age")).toEqual([23]);
    });
});
