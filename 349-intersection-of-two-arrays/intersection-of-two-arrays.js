/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = []
    let mySet1 = new Set(nums1);
    let mySet2 = new Set(nums2);
    // let unique = [...mySet]
    // console.log(mySet2)
    for(let num of mySet1){
        if(mySet2.has(num)){
            res.push(num)
        }
    }
        return res
    
};