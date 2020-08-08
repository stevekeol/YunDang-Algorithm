/*************************************************************
 * 【荷兰国旗】                                         
 * 给定一个整数数组，其中全是0或1或2，要求两两交换，最后使数组中所有0在左边，1在中间，2在右边
 * 输入： [2, 0, 1, 0, 0, 2, 1, 1, 2]
 * 输出： [0, 0, 0, 1, 1, 1, 2, 2, 2]
 * 思路1： 首尾双指针法+索引指针。
 * 注： 时间复杂度： O(n); 空间复杂度:O(1)。
 ************************************************************/
const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const zeroOneTwoSort = (arr) => {
  let left = 0; //标记左边全是0的那个位置
  let right = arr.length - 1; //标记右边全是2的那个位置
  let index = 0; 

  while(index <= right) {
    if(arr[index] === 0) {
      swap(arr, left, index);
      left++;
      index++;
    } else if(arr[index] === 1) {
      index++;
    } else {
      swap(arr, right, index);
      right--;
      //注意:此时index不能移动，因为与right交换来的值有可能是0，得再次跟left比较后才能移动。
    }
  }

  return arr;
}

console.log(zeroOneTwoSort([2, 0, 1, 0, 0, 2, 1, 1, 2]));