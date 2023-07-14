const SetMismatch = require("./a3");

test('SetMismatch([1,2,2,3] returns [2,3]', () =>{
    expect(SetMismatch([1,2,2,3])).toStrictEqual([2,3]);
});