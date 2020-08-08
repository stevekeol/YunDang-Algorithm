/*************************************************************
 * 【字符串旋转】                                         
 * 给定字符串，将前m个字符按序放在剩余字符的后面
 * 输入： 'abcdef', 3                                               
 * 输出：'defabc'
 * 核心思路：三次翻转法                      
 ************************************************************/

/*********************************************************
 * 【数组翻转】
 * 输入：[a, b, c, d], 0, 2
 * 输出：[c, b, a, d]
 *********************************************************/
const reverseArr = (arr, from, to) => {
  let temp;
  while(from < to) {
    temp = arr[from];
    arr[from++] = arr[to];
    arr[to--] = temp;
  }
  return arr;
}

const rotateStr = (str, m) => {
  let arr = Array.from(str); //js中字符串不可变，意味着往往要先转为数组
  reverseArr(arr, 0, m - 1);
  reverseArr(arr, m, arr.length - 1);
  reverseArr(arr, 0, arr.length - 1);
  return arr.join('');
}
