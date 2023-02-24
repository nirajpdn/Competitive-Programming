/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let result = "",
    resultLen = 0;

  const len = s.length;
  for (let i = 0; i < len; i++) {
    // Odd Substring Palindrome
    let left = i,
      right = i;
    while (left >= 0 && right < len && s[left] === s[right]) {
      if (right - left + 1 > resultLen) {
        result = s.slice(left, right + 1);
        resultLen = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
    // Even Substring Palindrome
    left = i;
    right = i + 1;
    while (left >= 0 && right < len && s[left] === s[right]) {
      if (right - left + 1 > resultLen) {
        result = s.slice(left, right + 1);
        resultLen = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return result;
};

console.log(longestPalindrome("carrace")); //carrac
console.log(longestPalindrome("babad")); //bab

// Time complexity: O(n²)
