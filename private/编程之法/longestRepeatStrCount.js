/*************************************************************
 * 【最长连续字符的长度】                                         
 * 求出给定最长连续字符的长度
 * 输入： 'aaaabbcc'                                         
 * 输出： 4
 * 注： 常规线性遍历；递归
 ************************************************************/

//常规线性遍历
const longestRepeatStrCount = (str) => {
  if(str.length == 0) return 0;

  let count = 1;
  let result = 1;
  let len = str.length;

  while(len--) {
    if(str[len - 1] == str[len]) {
      count++;
    } else {
      result = count > result ? count : result;
      count = 1;
    }
  }
  return result;
}

//递归遍历


console.log(longestRepeatStrCount('aaaabbcc'));
console.log(longestRepeatStrCount(''));

