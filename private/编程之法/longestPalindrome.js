/*************************************************************
 * 【最长回文子串的长度】                                         
 * 给定一个字符串，返回该字符串中最长回文子串的长度
 * 输入： 'edfabafcfb'                                              
 * 输出： 5 (fabaf)
 * 核心思路: 中心扩展法                
 ************************************************************/
const length = (str, i) => {
  let left = i - 1;
  let right = i + 1;
  let len = 1;

  while(left >= 0 && right <= str.length - 1) {
    if(str[left] != str[right]) {
      return len;
    } else {
      len += 2;
      left--;
      right++;
    }
  }
  return len;
}

const longestPalindrome_1 = (str) => {
  if(typeof str != 'string') throw new Error('expected string');
  if(str.length === 0) return 0;

  let len;
  let max = 1;
  for(let i = 0; i < str.length - 1; i++) {
    len = length(str, i);
    max = len > max ? len : max;
  }
  return max;
}

/*************************************************************
 * 【最长回文子串的长度】                                         
 * 给定一个字符串，返回该字符串中最长回文子串的长度
 * 输入： 'edfabafcfb'                                              
 * 输出： 5 (fabaf)
 * 核心思路: Manacher算法                
 ************************************************************/

