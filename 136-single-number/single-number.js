/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mpp = new Map();

    for(let num of nums){
        mpp.set(num, (mpp.get(num) || 0) + 1)
    }
//     for (let num of nums) {
//     if (mpp.has(num)) {
//       mpp.set(num, mpp.get(num) + 1);
//     } else {
//       mpp.set(num, 1);
//     }
//   }


    for(let [key,val] of mpp){
        if(val == 1){
            return key;
        }
    }
};