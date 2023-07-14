//A1
function findMissingNum(nums) {
    let i = 0;
    while (i < nums.length) {
      const correctIndex =  nums[i] - 1;
      if (i !== correctIndex) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  // swap
      } 
      i++;
    }
    for(let j=0;j<nums.length;j++){
        if (nums[j] !== j+1){
            return j+1;
        }
    }
    return null;
  }
  module.exports = findMissingNum;

//   let test2=[9,6,4,3,2,5,7,1,0];
// console.log(findMissingNum(test2));  // Output: [1, 2, 3, 4, 5]


// console.log(findMissingNum([2, 0, 1,4])); // Output: 2






