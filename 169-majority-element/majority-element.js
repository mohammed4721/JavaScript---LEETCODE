/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mpp = new Map();
    for(let num of nums){
        mpp.set(num, (mpp.get(num)||0)+1)
    }

    for(let [key, val] of mpp){
        if(val > [nums.length/2]){
            return key;
        }

    }
    return -1;
};