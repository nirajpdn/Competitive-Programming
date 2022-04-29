const LengthOfLongestSubstring = (str) => {
  let len = str.length;
  const substrings = [];

  for (let i = 0; i < len; i++) {
    let substring = "";
    for (let j = i; j < len; j++) {
      if (!substring.includes(str[j])) {
        substring += str[j];
      } else {
        break;
      }
    }
    substrings.push(substring);
  }

  len = substrings.reduce((acc, current, currentIndex, original) => {
    if (current.length > acc) {
      acc = current.length;
    }
    return acc;
  }, 0);
  return len;
};

console.log(LengthOfLongestSubstring("abcabcbb")); // 3
console.log(LengthOfLongestSubstring("bbbbb")); // 1
console.log(LengthOfLongestSubstring("pwwkew")); // 3
console.log(LengthOfLongestSubstring("vdvf")); // 3
console.log(LengthOfLongestSubstring("asjrgapa")); // 6
