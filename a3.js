//A3
function SetMismatch(nums) {
    let duplicate = -1;
    let missing = -1;
  
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
      const value = nums[currentIndex];
      const correctIndex = value - 1;
  
      if (currentIndex !== correctIndex) {
        if (nums[currentIndex] === nums[correctIndex]) {
          if (currentIndex !== 0) {
            duplicate = nums[currentIndex];
          } else {
            duplicate = 1;
          }
        }
      }
  
      if (nums[currentIndex] !== currentIndex + 1) {
        if (currentIndex === 0) {
          missing = duplicate + 1;
        } else {
          missing = currentIndex + 1;
        }
      }
  
      if (duplicate !== -1 && missing !== -1) {
        return [duplicate, missing];
      }
    }
  
    return null;
  }
  
  
  module.exports = SetMismatch;
  