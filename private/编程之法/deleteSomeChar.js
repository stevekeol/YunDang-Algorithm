/*************************************************************
 * 【删除特定字符】                                         
 * 给定一个原始字符串和一个模式字符串，删除原始字符串中所有的模式字符串中的字符
 * 输入: 'They are students.', 'aeiou'
 * 输出: 'Thy r stdnts'
 * 核心思路： 数组作散列表
 * 分析：时间复杂度 O(n)
 ************************************************************/

const deleteSomeChar = (rawStr, patternStr) => {
  let arr = Array.from(rawStr);
  let hashTable = Array(256).fill(0);

  for(let c of patternStr) {
    hashTable[c.charCodeAt()] = 1;
  }
  for(let i = 0; i < arr.length; i++) {
    if(hashTable[arr[i].charCodeAt()]) {
      arr[i] = '';
    }
  }
  return arr.join('');
}