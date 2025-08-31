/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let compliments = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    const comp = target - num;
    console.log(compliments)
    console.log("num: " + num + "comp: " + comp)
    if (compliments.has(comp)) {
      return [compliments.get(comp), i]
    }
    compliments.set(num, i);
  }
};

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target));
