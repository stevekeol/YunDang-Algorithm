/*************************************************************
 * 【字典序的所有排列】                                         *
 * 已知字符串的所有字符都不同，现将其任意排列，并按照字典序输出   *
 * 输入：'ab'                                                *
 * 输出：['aa', 'ab', 'ba', 'bb']                            *
 ************************************************************/

/*********************************************************
 * 【快速排序】
 * 输入：['f', 'e', 'f', 'c']
 * 输出：['c', 'e', 'f', 'f']
 *********************************************************/
const quickSort = (arr) => {
  if(arr.length <= 1)
    return arr;

  let left = [], right = [];
  let pivot = arr[arr.length - 1];
  arr.length = arr.length - 1; //重要的一步:从原数组去除该值！

  arr.forEach((item) => {
    if(item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  })

  return quickSort(left).concat(pivot, quickSort(right));
}

/*********************************************************
 * 【最右升序的首字符位置】
 * 输入：'cac'
 * 输出： 1
 *********************************************************/
const lastPreMax = (rawStr, currentStr) => {
  let len = rawStr.length - 1;
  let max = quickSort(Array.from(rawStr))[rawStr.length - 1]; //稍显耦合
  while(currentStr[len--] == max) {};
  return len + 1;
}

/*********************************************************
 * 【给定字符在排序字符串中的下一个字符】
 * 输入：'cab', b'
 * 输出： 'c'
 *********************************************************/
const nextCharOfSortedStr = (str, char) => {
  let temp = quickSort(Array.from(str)).join('');
  return temp.charAt(temp.indexOf(char) + 1);
}

/*********************************************************
 * 【给定字符在排序字符串中的下一个字符】
 * 输入：'cab', b'
 * 输出： 'c'
 *********************************************************/
const minCharOfSortedStr = (str) => {
  let temp = quickSort(Array.from(str)).join('');
  return temp.charAt(0);
}


/*********************************************************
 * 【替换字符串中某个位置的字符】
 * 输入：'abcdefg', 2, 't'
 * 输出： 'abtdefg'
 *********************************************************/
const replaceCharAtStr = (rawStr, index, value) => {
    let arr = Array.from(rawStr);
    arr[index] = value;
    return arr.join('');
}

/*********************************************************
 * 【给定字符串的（字典序的）下一个值】
 * 输入：'cac'
 * 输出： 'cba'
 * 思路： 找出最右升序的首字符位置 
 *    => 找出该位置字符的最小可升序字符 
 *    => 将该字符赋值给该位置
 *    => 该位置之后的所有字符最小化(假如该位置之后还有字符的话)
 *********************************************************/
const nextPermulation = (rawStr, currentStr) => {
  let pivotIndex = lastPreMax(rawStr, currentStr);
  let MIN = minCharOfSortedStr(rawStr);
  currentStr = replaceCharAtStr(currentStr, 
                                pivotIndex, 
                                nextCharOfSortedStr(rawStr, currentStr[pivotIndex]));
  while(pivotIndex < currentStr.length - 1) {
    currentStr = replaceCharAtStr(currentStr, ++pivotIndex, MIN);
  }
  return currentStr;
}

/*********************************************************
 * 【给出某个字符串在字典序的所有排列中的首个字符串】
 * 输入：'cab'
 * 输出： 'aaa'
 *********************************************************/
const headStr = (str) => {
  let len = str.length;
  let head = quickSort(Array.from(str))[0];
  let headStr = '';
  while(len--) {
    headStr += head;
  }
  return headStr;
}

/*********************************************************
 * 【给出某个字符串在字典序的所有排列中的末尾字符串】
 * 输入：'cab'
 * 输出： 'ccc'
 *********************************************************/
const tailStr = (str) => {
  let len = str.length;
  let tail = quickSort(Array.from(str))[str.length - 1];
  let tailStr = '';
  while(len--) {
    tailStr += tail;
  }
  return tailStr;
}

//综上，最后的总函数
const getAllDirectorySort = (str) => {
  let res = [];
  let item = headStr(str);
  let end = tailStr(str);

  while(item < end) {
    res.push(item);
    item = nextPermulation(str, item);
  }

  res.push(end);

  return res;
}

//使用
console.log(getAllDirectorySort('cab'));