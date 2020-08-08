/*************************************************************
 * 【有序数组的查找】                                         
 * 给定一个排序好的数组，查找某个数是否在该数组中
 * 核心思路： 二分查找
 ************************************************************/

const binarySearch = (arr, value) => {
  if(arr[0] > value || arr[arr.length - 1] < value)
    return -1;

  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let middle = left + (( right - left ) >> 1);
    if(arr[middle] > value) {
      right = middle - 1;
    } else if(arr[middle] < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}
