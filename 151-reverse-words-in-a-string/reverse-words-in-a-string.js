/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let trimmedString = s.trim()
    let res = trimmedString.split(" ").filter(word => word !== "");
    let left = 0;
    let right = res.length-1;

    while(left < right){
        [res[left], res[right]] = [res[right], res[left]]
        left++;
        right--;
    }
    console.log(res);
    return res.join(" ") 
};