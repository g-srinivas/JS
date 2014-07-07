describe('pairs', function() {
    it('should return [] if {} passed', function() {
        expect(pairs({})).toEqual([]);
    });

    it('should convert an onject into a list of [Key, Value] pairs', function() {
        expect(pairs({name : 'srinu', age : 45})).toEqual([['name', 'srinu'], ['age', 45]]);
    });

    it('should conver an Object into a list of [Key, Value] pairs', function() {
        expect(pairs({x : 'x', y : { a : 'a', b : 'b'}, z : 'z'})).toEqual([
            ['x', 'x'],
            ['y',
             [
                 ['a', 'a'],
                 ['b', 'b']
             ]
            ],
            ['z', 'z']
        ]);
    });
});
