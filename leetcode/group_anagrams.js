/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()

  for (let str of strs) {
    let count = new Array(26).fill(0)
    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    const key = count.join('#')
    const l = map.get(key) || []
    l.push(str)
    map.set(key, l)
  }
  return Array.from(map.values())
};


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))

