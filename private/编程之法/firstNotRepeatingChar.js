/*************************************************************
 * 【第一个只出现一次的字符】                                         
 * 找出给定字符串中第一个只出现一次的字符，如无，返回-1
 * 输入: 'abaccdeff'
 * 输出: 'b'
 * 核心思路： 散列表+两次遍历； 数组作散列表
 * 分析：时间复杂度 O(n)
 ************************************************************/
//
const firstNotRepeatingChar = (str) => {
  let hashTable = {};

  for(let c of str) {
    if(hashTable[c]) {
      hashTable[c]++;
    } else {
      hashTable[c] = 1;
    }
  }
  for(let key in hashTable) {
    if(hashTable.hasOwnProperty(key)) {
      if(hashTable[key] == 1) return key;
    }
  }
  return -1;
}

console.log(firstNotRepeatingChar('abaccdeff'));
console.log(firstNotRepeatingChar('ababccdd'));