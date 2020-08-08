/*************************************************************
 * 【寻找下标差值最大的两个数】                                         
 * 给定一数组，选择两个下标i和j，在满足a[i] < a[j]的前提下，使得差值j-i尽可能大
 * 输入： [13, 2, 9, 4, 11, 8]                                           
 * 输出： [1, 5]
 * 思路： 首尾指针 + 邻居比较
 * 性能：时间O(n), 空间O(1)
 ************************************************************/
const maxDistance = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let left = i + 1;
  let right = j - 1;

  while(arr[i] >= arr[j]) {
    if(arr[left] < arr[j]) {
      i = left;
      break;
    } else if (arr[i] < arr[right]) {
      j = right;
      break;
    } else {
      i++;
      j--;
      left = i + 1;
      right = j - 1;
    }
  }
  return [i, j];
}

let arr = [13, 2, 9, 4, 11, 8];
console.log(maxDistance(arr));