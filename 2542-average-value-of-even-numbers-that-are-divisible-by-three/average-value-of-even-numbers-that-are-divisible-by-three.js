/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let result = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 3 === 0 && nums[i] % 2 === 0){
            result.push(nums[i]);
        }
    }
    if(result.length == 0){
        return 0;
    }
    let sum = 0;
    for(let j=0; j<result.length; j++){
        sum += result[j];
    }

    let avg = Math.floor(sum / result.length);
    return avg;
};