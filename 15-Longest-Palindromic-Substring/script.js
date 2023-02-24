const longestPalindrome = (str) => {
  if (!str || str.length < 1) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {}
};

var expandFromMiddle = (str, left, right) => {
  if (!str || left > right) return 0;
  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) === str.charAt(right)
  ) {
    left--;
    right++;
  }
  return right - left - 1;
};

longestPalindrome("aaaabbaa");
