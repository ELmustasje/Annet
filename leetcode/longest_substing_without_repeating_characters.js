
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0
  let low = 0
  let high = 0
  let mySet = new Set()
  while (high < s.length) {
    if (!mySet.has(s[high])) {
      mySet.add(s[high])
      high++
    } else {
      longest = Math.max(longest, mySet.size)
      do {
        mySet.delete(s[low])
        low++
      } while (mySet.has(s[high]));
    }

  }
  return Math.max(longest, mySet.size)
};

