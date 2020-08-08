/*************************************************************
 * 【字符串的所有组合】                                         
 * 输入一个字符串，输出该字符串中字符的所有组合
 * 输入： 'abc'                                             
 * 输出： 'abc', 'ac', 'ab', 'bc', 'c', 'b', 'a' 
 * 注： 字符串的字符不重复
 * 核心思路: 递归！
 *        => 首字母+除首字母以外所有字符的组合
 *        => 除首字母以外所有字符的组合
 *        => 仅包含首字母 
 ************************************************************/

//需要再次理解，自己做不出来
function strAllCombination(str) {
  if(str.length === 1) return [str];

  let arr = strAllCombination(str.slice(1));
  let res1 = arr.map(item => str[0] + item);
  let res2 = strAllCombination(str.slice(1));
  let res3 = [str[0]];
  return res1.concat(res2, res3);
}