/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
let arr = s.split(" ").filter(Boolean);

let lastWord = arr[arr.length - 1];

let count = 0;

for (let ch of lastWord) {
  count++;
}

return count;
 };