/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let result = [];
    let largest = -Infinity;
    let sLargest = -Infinity;
    for(let i=0; i<s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            result.push(Number(s[i]));
        } 
    }
    for(let i=0; i<result.length; i++){
        if(result[i] > largest){
            sLargest = largest;
            largest = result[i];
        } else if(result[i] > sLargest && result[i] < largest){
            sLargest = result[i];
        }
    }
    return sLargest === -Infinity ? -1 : sLargest;
};