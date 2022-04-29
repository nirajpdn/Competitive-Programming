var FindMedianSortedArrays = function (nums1, nums2 = []) {
  const nums = [...nums1, ...nums2];
  // sorting the numbers in array
  nums.sort(sortNumber);

  const n = nums.length; // no of observations
  const mid = Math.floor((n + 1) / 2);
  if ((n + 1) % 2 === 0) {
    return nums[mid - 1];
  } else {
    return (nums[mid - 1] + nums[mid]) / 2;
  }
};

console.log(FindMedianSortedArrays([1, 3], [2, 4])); // 2.5
console.log(FindMedianSortedArrays([3], [-2, -1])); // -1

function sortNumber(a, b) {
  return a - b;
}
