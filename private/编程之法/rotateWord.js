/*************************************************************
 * 【单词旋转】                                         
 * 给定字符串，内含空格分隔的多个单词，以单词为单位旋转该字符串
 * 输入： 'I am stevekeol.'                                              
 * 输出：'stevekeol. am I'
 * 注：标点视为和单词一体的字符
 * 核心思路：(N + 1)次翻转法，N为单词数                  
 ************************************************************/

/*********************************************************
 * 【数组翻转】
 * 输入：[a, b, c, d], 0, 2
 * 输出：[c, b, a, d]
 *********************************************************/
const reverseArr = (arr, from , to) => {
  let temp;
  while(from < to) {
    temp = arr[from];
    arr[from++] = arr[to];
    arr[to--] = temp;
  }
  return arr;
}

const rotateWord = (str) => {
  let arr = str.split(' ');

  arr.forEach((item) => {
    reverseArr(Array.from(item), 0, item.length);
  })

  reverseArr(arr, 0, arr.length);
  return arr.join(' ').trim();
}
