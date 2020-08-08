/*************************************************************
 * 【最大连续子数组的和】                                         
 * 给定一个整数数组，其中连续的一个/多个整数组成一个子数组，每个子数组都有一个和，求出该数组的最大连续子数组的和
 * 输入： [1, -2, 3, 10, -4, 7, 2 -5]
 * 输出： 18 ([3, 10, -4, 7, 2])
 * 思路1： 首尾指针法
 * 注： 时间复杂度： O(n); 空间复杂度:O(1)。且可以给出首尾位置。
 * 思路2： 动态规划
 * 注： 时间复杂度: O(n); 空间复杂度: O(1)
 ************************************************************/

const maxSubArray = (arr) => {
  let left = 0; //左动指针
  let right = arr.length - 1; //右动指针

  let leftFlag = 0; //左静指针
  let rightFlag = arr.length - 1; //右静指针

  let result = 0; //最终结果
  let variation = 0; //某一端的变化量
  let flag; //标记上一次处理的是哪一端，当与上次处理不是同一端时，清零

  while(left <= right) {
    if(arr[left] <= arr[right]) {
      if(flag === 'right')
        variation = 0;
      variation += arr[left++];
      if(variation <= 0)
        leftFlag = left;
    } else {
      if(flag === 'left')
        variation = 0;
      variation += arr[right--];
      if(variation <= 0)
        rightFlag = right;
    }
  }

  for(let i = leftFlag - 1; i <= rightFlag + 1; i++) {
    result += arr[i];
  }
  return result;
}

const maxSubArray2 = (arr) => {
  let currentSum = arr[0];
  let sum = arr[0];

  for(let i = 0; i < arr.length - 1; i++) {
    if(currentSum <= 0) {
      currentSum = arr[i];
    } else {
      currentSum += arr[i];
    }

    if(currentSum > sum) {
      sum = currentSum;
    }
  }

  return sum;
}

console.log(maxSubArray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubArray2([1, -2, 3, 10, -4, 7, 2, -5]));