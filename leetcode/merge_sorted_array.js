/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let z = m + n - 1;

  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[z] = nums1[p1];
      p1--;
    } else {
      nums1[z] = nums2[p2];
      p2--;
    }
    z--
  }
  return;
};

let nums1 =
  [1, 2, 3, 0, 0, 0]
let m =
  3
let nums2 =
  [2, 5, 6]
let n =
  3


merge(nums1, m, nums2, n)
