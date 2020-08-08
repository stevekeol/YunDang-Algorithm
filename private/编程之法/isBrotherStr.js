/*************************************************************
 * 【兄弟字符串/变位词的判断】                                         
 * 判断两个字符串是否是兄弟字符串(兄弟字符串：字符及其个数都相同，只是位置不同)
 * 输入： 'aabc', 'caba'                                              
 * 输出： true
 * 注: 假设字符全是小写(无空格，标点，大写字符等)
 * 核心思路:                 
 ************************************************************/
const isBrotherStr = (strA, strB) => {
  if(strA.length != strB.length || strA === strB)
    return false;

  let hashTableA = Array(26).fill(0);
  let hashTableB = Array(26).fill(0);

  for(let i = 0; i < strA.length; i++) {
    hashTableA[strA[i].charCodeAt() - 'a'.charCodeAt()]++;
    hashTableB[strB[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for(let i = 0; i < 26; i++) {
    if(hashTableA[i] != hashTableB[i]) {
      return false;
    }
  }

  return true;
}