function twoSum(ary, target) {
    let left = 0; 
    let right = ary.length - 1; 

    while (left < right) {
        const sum = ary[left] + ary[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; 
        } else {
            right--;
        }
    }
    return [];
}
module.exports={twoSum};