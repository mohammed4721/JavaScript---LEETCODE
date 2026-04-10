/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    function mergeSort(arr){

    //base case 
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);

    }

    function merge(leftArr, rightArr){
        let result = [];
        let i=0
        let j=0;
        while(i<leftArr.length && j<rightArr.length){
            if(leftArr[i] < rightArr[j]){
                result.push(leftArr[i]);
                i++
            }else{
                result.push(rightArr[j])
                j++
            }
        }

        return [...result, ...leftArr.slice(i), ...rightArr.slice(j)]
    }

    return mergeSort(nums)
    
};