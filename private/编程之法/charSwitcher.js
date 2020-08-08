/*************************************************************
 * 【字符的左右移动】                                         
 * 给定一个字符串，该字符串是*和26个字母的任意组合。
 * 需要把所有的*全部移动到字符串的最左侧，
 * 字母全部移动到最右侧且相对顺序不变。要求时间/空间复杂度最小。
 * 输入： 'cians**a*asd*xa***x'                                             
 * 输出： '*******ciansaasdxax'
 * 注： 
 ************************************************************/
const swap = (arr, indexA, indexB) => {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

const charSwitcher = (str) => {
  let arr = Array.from(str);
  let index = arr.length - 1;
  let currentIndex = null;

  while(index--) { //此处没彻底想通，原先是while(index-- >= 0)会出现**a -> *a，即少一位
    if(arr[index] === '*') {
      !currentIndex && (currentIndex = index);
    } else {
      currentIndex && (swap(arr, index, currentIndex), currentIndex--);
    }
  }  
  return arr.join('');
}