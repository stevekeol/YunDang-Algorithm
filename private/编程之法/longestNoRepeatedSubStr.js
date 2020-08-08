/*************************************************************
 * 【无重复字符的最长子串】                                         
 * 给定字符串，找出其中不含重复字符的最长子串的长度
 * 示例： 'abcabcbb' -> 3    
 * 示例： 'bbbb' -> 1                                    
 * 核心思路： 双指针法               
 ************************************************************/

const lengthOfLongestSubString = (str) => {
  let result = 0; //即将返回的结果（最长值）
  let currentStr = ''; //目前在分析中的字符串
  let windowLen = 0; //该字符串的长度

  for(let c of str) {
    if(currentStr.indexOf(c) === -1) {
      currentStr += c;
      windowLen++;
    } else {
      currentStr += c;
      currentStr = currentStr.slice(currentStr.indexOf(c) + 1); //关键步骤
      windowLen = currentStr.length;
    }
    result = windowLen > result ? windowLen : result;
  }
  return result;
}