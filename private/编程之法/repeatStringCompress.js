/*************************************************************
 * 【重复字符的压缩】                                         
 * 输入： 'abbbccd'                                               
 * 输出：'23b2cd'
 * 核心思路：快慢指针                     
 ************************************************************/
const repeatStringCompress = (str) => {
  let arr = Array.from(str);
  let count = 1;
  let slowIndex = 0;
  let fastIndex = 1;

  while(fastIndex < arr.length) {
    if(arr[fastIndex] == arr[fastIndex - 1]) {
      count++;
    } else {
      if(count == 1) {
        arr[slowIndex] = arr[fastIndex - 1];
        slowIndex++;
      } else {
        arr[slowIndex] = count;
        arr[slowIndex + 1] = arr[fastIndex - 1];
        slowIndex = slowIndex + 2;
      }
      count = 1;
    }
    fastIndex++;
  }
  //最后一种字符的清理工作
  if(count == 1) {
    arr[slowIndex] = arr[fastIndex - 1];
    arr.length = slowIndex + 1;
  } else {
    arr[slowIndex] = count;
    arr[slowIndex + 1] = arr[fastIndex - 1];
    arr.length = slowIndex + 2;
  }  
  return arr.join('');
}

console.log(repeatStringCompress('ppppppppp'));
console.log(repeatStringCompress('abbbccd'));
console.log(repeatStringCompress('abcabc'));