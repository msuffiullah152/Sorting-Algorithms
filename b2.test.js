const { twoSum }= require("./b2");
describe("twoSum", () => {
   
    test("[2,7,11,15] => 9==[1,2]", () => {
    
      expect(twoSum([2,7,11,15],9)).toEqual([1,2]);
    });
  
    test("[1,2,4,6,8,10] => 7==[1,4]", () => {
    
        expect(twoSum([1,2,4,6,8,10],7)).toEqual([1,4]);
      });
  })