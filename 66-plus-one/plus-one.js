/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 1) join digits into one string
    const str = digits.join("");      // e.g. [1,2,3] -> "123"

    // 2) convert to BigInt (safe for very large numbers)
    const big = BigInt(str);         // e.g. "123" -> 123n

    // 3) add 1 using BigInt literal 1n
    const added = big + 1n;          // 123n + 1n -> 124n

    // 4) convert back to string and split into chars -> numbers
    return added.toString().split("").map(Number); // "124" -> ["1","2","4"] -> [1,2,4]
};
