/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns an rotated array
 */

// Using reverse method

var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

var reverse = (nums, start, end) => {
  while (start < end) {
    var temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // [6,7,8,9,10,1,2,3,4,5]
console.log(rotate([1, 2], 3)); // [2,1]
