/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer until we find an alphanumeric character
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Move right pointer until we find an alphanumeric character
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters (in lowercase)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Helper function to check alphanumeric
function isAlphaNumeric(ch) {
    return /^[a-z0-9]$/i.test(ch);
}
