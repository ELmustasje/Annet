/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  return peakElement(nums, 0, nums.length)
};


var peakElement = function(nums, low, high) {
  if (low == high) {
    return low;
  }

  let mid = low + (high - low) / 2;
  if (nums[mid] < nums[mid + 1]) {
    return peakElement(nums, mid + 1, high);
  } else if (nums[mid] < nums[mid - 1]) {
    return peakElement(nums, low, mid - 1);
  } else {
    return mid;
  }
}
