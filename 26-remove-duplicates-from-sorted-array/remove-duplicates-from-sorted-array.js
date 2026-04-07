/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let check = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[check] != nums[i]){
            check++;
            nums[check] = nums[i];
        }
    }
    return check+1
};