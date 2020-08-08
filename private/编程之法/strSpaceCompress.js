/*************************************************************
 * 【字符串的空格压缩】                                         
 * 给定字符串中连续的空格压缩成一个，并将以空格分隔的字符串逆序打印出来
 * 输入: 'abc  def   ghi jkl'
 * 输出: 'cba fed ihg lkj'
 ************************************************************/
//前置函数：字符串翻转
const reverseStr = (str) => {
  let arr = Array.from(str);
  let temp;
  let from = 0;
  let to = arr.length - 1;
  while(from < to) {
    temp = arr[from];
    arr[from++] = arr[to];
    arr[to--] = temp;
  }
  return arr.join('');
}

//双指针法（思路理清版）
const compressSpace_1 = (str) => {
    let arr = Array.from(str.trim());
    let len = arr.length;
    let fastIndex = 0;
    let slowIndex = 0;
    let spaceFlag = false;

    while(fastIndex < len) {
        if(arr[fastIndex] == ' ') {
            if(fastIndex != slowIndex){
                if(!spaceFlag) {
                    arr[slowIndex] = arr[fastIndex];
                    fastIndex++;
                    slowIndex++;
                    spaceFlag = true;
                } else {
                    fastIndex++;
                }
            } else {
                if(!spaceFlag) {
                    fastIndex++;
                    slowIndex++;
                    spaceFlag = true;
                } else {
                    fastIndex++;
                }
            }
        } else {
            if(fastIndex != slowIndex) {
                if(spaceFlag) {
                    arr[slowIndex] = arr[fastIndex];
                    fastIndex++;
                    slowIndex++;
                    spaceFlag = false;
                } else {
                    arr[slowIndex] = arr[fastIndex];
                    fastIndex++;
                    slowIndex++;
                }
            } else {
                if(spaceFlag) {
                    fastIndex++;
                    slowIndex++;
                    spaceFlag = false;
                } else {
                    fastIndex++;
                    slowIndex++;
                }
            }
        }
    }
    arr.length = slowIndex;
    arr = arr.join('').split(' ').map((item) => reverseStr(item));
    return arr.join('');
}

//双指针法（代码精简版）
const compressSpace_2 = (str) => {
    let arr = Array.from(str.trim());
    let fastIndex = 0;
    let slowIndex = 0;
    let spaceFlag = false; //标记当前index(即fastIndex)的上一位是否是空格

    while(fastIndex < arr.length) {
        if(arr[fastIndex] != ' ') {
            if(fastIndex != slowIndex) {
                arr[slowIndex] = arr[fastIndex];
            }
            if(spaceFlag) {
                spaceFlag = false;
            }
            slowIndex++;
        }
        if(arr[fastIndex] == ' ' && !spaceFlag) {
            if(fastIndex != slowIndex) {
                arr[slowIndex] = arr[fastIndex];
            }
            slowIndex++;
            spaceFlag = true;
        } 
        fastIndex++;
    }

    arr.length = slowIndex;
    arr = arr.join('').split(' ').map((item) => reverseStr(item));
    return arr.join(' ');
}

//js内置函数法
const compressSpace = (str) => {
  let arr = Array.from(str);
  let tempArr = [];
  let spaceFlag = false;

  arr.forEach((item) => {
    if(item != ' '){
      tempArr.push(item);
      spaceFlag = false;
    } else {
      if(!spaceFlag) {
        tempArr.push(item);
        spaceFlag = true;
      }
    }
  })

  arr = tempArr.join('').split(' ').map((item) => reverseStr(item));
  return arr.join(' ');
}

console.log(compressSpace('a   bc  d ef    g h'));
