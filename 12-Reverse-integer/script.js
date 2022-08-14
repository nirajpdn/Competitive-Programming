const reverseInteger = (x) => {
  let isNegative = x < 0;
  let reversed = 0;
  if (isNegative) x *= -1;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (reversed > 2 ** 31 - 1) {
    return 0;
  }
  return isNegative ? (reversed *= -1) : reversed;
};

console.log(reverseInteger(-123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
