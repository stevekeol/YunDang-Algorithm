/*************************************************************
 * 【寻找满足条件的数对】                                         
 * 给定一个数组，输出满足2a=b的数对，时间复杂度尽量低
 * 输入: [1, 2, 3, 4, 6, 7, 9]
 * 输出: [1, 2, 3]
 * 核心思路： 线性遍历，并用hashMap记录item的匹配数,并标记该数是否已匹配
 * 性能：时间O(n),空间O(n)
 ************************************************************/
const getNumPair = (arr) => {
  let hashMap = {}; //item的匹配数
  let result = [];

  arr.map(item => {
    //判断item自身是否是前面需要的"匹配数"
    if(hashMap.hasOwnProperty(item)) {
      if(!hashMap[item]) {
        result.push(item / 2);
        hashMap[item] = true;
      }
    }
    //判断"item的匹配数"是否需要加入hashMap
    if(!hashMap.hasOwnProperty(item * 2)) {
      hashMap[item * 2] = false;
    }
  })

  return result;
}

let testArr = [1, 2, 3, 4, 6, 7, 9, 18];
console.log(getNumPair(testArr));