/*************************************************************
 * 【字典序的全排列】                                         
 * 输入一个字符串，输出该字符串中字符的所有排列
 * 输入： 'abc'                                             
 * 输出： 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
 * 注： 字符串的字符不重复
 * 核心思路: next_permulation():找出给定字符串在字典序中的下一个值。 
 *         => 找出字符串最右升序的首个位置i;
 *         => 找出i右边比i大的最小的那个数的位置j;
 *         => 交换i和j位置的值
 *         => 翻转位置i后面的字符串（即由降序->升序）          
 ************************************************************/

//找出字符串最右升序的首个位置i
const indexOfPivot = (str) => {
  let index = str.length - 1;
  while(str[index - 1] > str[index]) {
    index--;
  }
  return index - 1;
}

//找出i右边比i大的最小的那个数的位置j
const indexOfStandby = (str, indexOfPivot) => {
  let len = str.length - 1;

  while(len > indexOfPivot && str[len--] <= str[indexOfPivot]) {};
  return len + 1;
}

//交换i和j位置的值
const swap = (str, indexOfPivot, indexOfStandby) => {
  let arr = Array.from(str);
  let temp = arr[indexOfPivot];
  arr[indexOfPivot] = arr[indexOfStandby];
  arr[indexOfStandby] = temp;
  return arr.join('');
}

//翻转位置i后面的字符串（即由降序->升序）
const reverseStr = (str, from, to) => {
  let arr = Array.from(str);
  let temp;
  while(from < to) {
    temp = arr[from];
    arr[from++] = arr[to];
    arr[to--] = temp;
  }
  return arr.join('');
}

//求出给定字符串在字典序中的下一个字符串
const nextPermulation =  (str) => {
  let _indexOfPivot = indexOfPivot(str);
  let _indexOfStandby = indexOfStandby(str, _indexOfPivot);
  return reverseStr(swap(str, _indexOfPivot, _indexOfStandby), 
                    _indexOfPivot + 1, 
                    str.length - 1);
}

//综上，（以下为略写）
let i = '12345';
while(i < '54321') {
  console.log(i);
  i = nextPermulation(i);
}

