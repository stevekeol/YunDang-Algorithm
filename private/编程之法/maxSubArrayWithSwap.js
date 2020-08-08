/*************************************************************
 * 【最大连续子数组的和的增强版】                                         
 * 给定一个整数数组，允许交换数组中任意两个位置的数，其最大的子数组和。
 * 输入： [1, -2, 3, 10, -4, 7, 2 -5]
 * 输出： 23 ([3, 10, 1, 7, 2])
 * 思路1： 首尾指针法,同时记录子数组外部的最大值。结束后再遍历出子数组的最小值即可。
 * 注： 时间复杂度： O(n); 空间复杂度:O(1)。且可以给出首尾位置。
 ************************************************************/

const maxSubArrayWithSwap = (arr) => {
  let left = 0; //左动指针
  let right = arr.length - 1; //右动指针

  let leftFlag = 0; //左静指针
  let rightFlag = arr.length - 1; //右静指针

  let result = 0; //最终结果
  let variation = 0; //某一端的变化量
  let flag; //标记上一次处理的是哪一端，当与上次处理不是同一端时，清零

  let max; //子数组外面的最大值
  let min; //最终最大子数组中的最小值

  while(left <= right) {
    if(arr[left] <= arr[right]) {
      if(flag != 'left') variation = 0;
      variation += arr[left++];
      if(variation <= 0) {
        for(let i = leftFlag; i < left; i++) {
          max = (!max || max < arr[i]) ? arr[i] : max;
        }
        leftFlag = left;
      }
      flag = 'left';
    } else {
      if(flag != 'right') variation = 0;
      variation += arr[right--];
      if(variation <= 0) {
        for(let i = rightFlag; i > right; i--) {
          max = (!max || max < arr[i]) ? arr[i] : max;
        }        
        rightFlag = right;
      }
      flag = 'right';

    }
  }

  for(let i = leftFlag; i <= rightFlag; i++) {
    min = (!min || min > arr[i]) ? arr[i] : min;
    result += arr[i];
  }
  result = (min < max) ? (result - min + max) : result;
  return result;
}

console.log(maxSubArrayWithSwap([1, -2, 3, 10, -4, 7, 2, -5]));
