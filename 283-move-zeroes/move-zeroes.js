/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
   let pos = 0; // position of the next zero to be swapped

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // swap nums[i] with nums[pos] if they are not the same
            let temp = nums[i];
            nums[i] = nums[pos];
            nums[pos] = temp;

            pos++; // move zero pointer forward
        }
    }
};