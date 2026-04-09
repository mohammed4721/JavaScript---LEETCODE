/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};
    for(let word of strs){
        let key = word.split("").sort().join("")
        if(!res[key]){
            res[key] = [];
        }

        res[key].push(word);
    }

    return Object.values(res);
};