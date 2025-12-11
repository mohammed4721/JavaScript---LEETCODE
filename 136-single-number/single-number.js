/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     for(let i=0; i<nums.length; i++){
//         let count = 0;
//         for(let j=0; j<nums.length; j++){
//             if(nums[i] === nums[j]){
//                 count++;
//             }
//         }
//         if(count === 1){
//             return nums[i];
//         }
//     }
// };

var singleNumber = function(nums) {
    let result = 0;
    for (let n of nums) {
        result ^= n; // XOR cancels out duplicates
    }
    return result;
};
