/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let pos = 0;
  let jumps = 0;
  while (pos < nums.length - 1) {
    console.log(pos);
    jumps++;
    let reach = nums[pos];
    if (pos + reach >= nums.length - 1) {
      return jumps;
    }
    let best = 0;
    let bestIndex = pos;
    for (let i = 1; i <= reach; i++) {
      if (nums[pos + i] + i > best) {
        best = nums[pos + i] + i;
        bestIndex = pos + i;
      }
    }
    pos = bestIndex;
  }
  return jumps;
};
