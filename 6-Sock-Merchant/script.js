function sockMerchant(n, ar) {
  if (n !== ar.length || !n || !ar.length) {
    return 0;
  }
  // create an object to store the lists of socks per color
  let pairHash = {};
  // For Example: We have input ar as [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
  // Then the object will be {1: [1,1,1,1], 2: [2], 3:[3,3,3,3,3]}
  ar.forEach((item) => {
    if (pairHash[item]) {
      pairHash[item].push(item);
    } else {
      pairHash[item] = [item];
    }
  });
  const count = Object.keys(pairHash).reduce((acc, current, index) => {
    if (pairHash[current].length > 1) {
      if (pairHash[current].length % 2 === 0) {
        acc += pairHash[current].length / 2;
      } else if (pairHash[current].length > 2) {
        acc += (pairHash[current].length - 1) / 2;
      } else {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4
