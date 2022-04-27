const TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(TwoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(TwoSum([2, 5, 4, 15], 6)); // [0, 2]
console.log(TwoSum([3, 4, 5, 15], 20)); // [2, 3]
