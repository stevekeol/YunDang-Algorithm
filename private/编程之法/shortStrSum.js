/*************************************************************
 * 【长度最短的连续子序列】                                         
 * 给定一个n个正整数组成的序列，现给定一个整数S，要求给出序列中长度最短的一个子序列，其和大于等于S
 * 输入： [8, 2, 1, 2, 3, 9, 11, 1, 8, 3, 4, 2]
 * 输出： left = 5; right = 6;
 * 思路： 双指针弹性收缩法
 * 注： 时间复杂度： O(n); 空间复杂度:O(1)。且可以给出首尾位置。
 ************************************************************/

const shortStrSum = (arr, S) => {
  let res = {};
  let currentS = 0;
  let left, right;

  //极端情况
  if(arr.length === 0) return -1;
  if(arr.length === 1) {
    if(arr[0] >= S) {
      res.left = 0;
      res.right = 0;
      return res;
    } else {
      return -1;
    }
  }

  //常规情况
  left = 0;
  right = 1;
  currentS = arr[left] + arr[right];
  //只要和不满足要求，就扩张该子序列（left静止，right移动)
  while(currentS < S && right < arr.length) {
    right++;
    currentS += arr[right];
  }

  //遍历完整个序列仍不满足和的要求
  if(right >= arr.length)
    return -1;

  //在满足和的要求情况下，收缩子序列（right静止，left右移）
  while(currentS - arr[left] >= S) {
    currentS -= arr[left];
    left++;
  }

  res.leftFlag = left;
  res.rightFlag = right;

  //在找到第一个满足和要求的子序列后，right继续往右走，每走一步，重复上述扩张收缩过程
  while(++right < arr.length) {
    currentS += arr[right];
    while(currentS - arr[left] >= S) {
      currentS -= arr[left];
      left++;
    }

    //子序列更短时，更新左右位置
    if(right - left <= res.rightFlag - res.leftFlag) {
      res.leftFlag = left;
      res.rightFlag = right;
    }
  }

  return res;
}

console.log(shortStrSum([], 15));
console.log(shortStrSum([17], 15));
console.log(shortStrSum([15, 16, 1, 2], 15));
console.log(shortStrSum([5, 2, 8, 1, 1, 1, 17, 3, 2, 9], 15));
console.log(shortStrSum([8, 2, 1, 2, 3, 9, 11, 1, 8, 3, 4, 2], 15));