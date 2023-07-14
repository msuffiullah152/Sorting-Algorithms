const findMissingNum = require('./a1.test');

test('findMissingNum([2, 0, 1,4] returns [3]', () =>{
    expect(findMissingNum([2, 0, 1,4])).toStrictEqual([3]);
});