/*************************************************************
 * 【字符串包含】                                         
 * 判断字符串B中的所有字符，是否都在字符串A中
 * 输入： 'abcdef', 'bcba'                                              
 * 输出： true
 * 注: 假设字符全是小写
 * 核心思路: 用一个位表示一个字符，然后用位运算判断有无                 
 ************************************************************/
const strContain = (strA, strB) => {
  let hash = 0;
  for(let c of strA) {
    hash |= (1 << (c.charCodeAt() - 'a'.charCodeAt())); //js中无法字符直接相减
  }

  for(let c of strB) {
    if(!(hash & (1 << (c.charCodeAt() - 'a'.charCodeAt())))){
      return false;
    }
  }
  return true;
}