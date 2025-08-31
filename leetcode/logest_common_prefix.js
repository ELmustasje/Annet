/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  strs = strs.sort();
  let aws = "";

  for (let i in strs[0]){
    for (let w of strs){
      if(strs[0][i] != w[i]){
        return aws
      }
    }
    aws+=strs[0][i];
  }
  return aws
  
};
strs = ["flower","flow","flight"]
longestCommonPrefix(strs)

