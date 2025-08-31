/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let closing = [")", "}", "]"]
  let opening = ["(", "{", "["]
  for (let c of s) {
    console.log(c)
    if (closing.includes(c)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] != opening[closing.indexOf(c)]) {
        return false;
      }
      stack.pop()
    }
    if (opening.includes(c)) {
      stack.push(c)
    }
  }
  console.log(stack)
  return stack.length == 0;
};


let s = "([)]"
console.log(isValid(s))
