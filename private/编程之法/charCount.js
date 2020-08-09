/*************************************************************
 * 【字符个数的统计】                                         
 * 统计给定字符串中个字符出现的次数，要求区分大小写，时间复杂度为O(n) 
 ************************************************************/
const charCount = (str) => {
  let hash = {};
  let len = str.length - 1;
  while(len--) {
    if(!hash[str[len]]) {
      hash[str[len]] = 1;
    } else {
      hash[str[len]]++;
    }
  }
  return hash;
}
