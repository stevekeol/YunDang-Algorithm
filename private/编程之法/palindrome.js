/*************************************************************
 * 【回文字符串的判断】                                         
 * 回文字符串：正读和反读一样 
 * 输入：'abcba'                                                
 * 输出：true
 * 输入: 'abcbc'
 * 输出: false                            
 ************************************************************/
 
const palindrome = (str) => {
  if(!str || str.length < 1)
    return false;

  if(str.length == 1)
    return true;

  let left = 0;
  let right = str.length - 1;
  while(left < right) {
    if(str[left] != str [right])
      return false;

    left++;
    right--;
  }
  return true;
}
