/*************************************************************
 * 【不改变正负数的相对顺序的重新排列】  - bug                                     
 * 给定一个未排序的整数数组，数组中元素有正有负，要求对数组中所有元素重新排列，所有负数在正数前面，且相对位置不变。
 * 输入： [1, 7, -5, 9, -12, 15]
 * 输出： [-5, -12, 1, 7, 9, 15]
 * 思路1： 首尾指针法
 * 注： 时间复杂度： O(n); 空间复杂度:O(1)。且可以给出首尾位置。
 ************************************************************/
const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
const stablePosNegSort = (arr) => {
  let left = right = arr.length - 1;

  while(left >= 0) {
    if(arr[left] > 0) {
      if(left == right) {
        left--;
        right--;
      } else {
        //此处有Bug
        console.log(1, arr);
        let i = left + 1;
        let flag = left;
        while(i <= right) {
          swap(arr, left, i);
          left++;
          i++;
        }
        console.log(2, arr);
        left = flag;
      }
    } else {
      left--;
    }
    // console.log(arr);
  }

  return arr;
}

console.log(stablePosNegSort([1, 7, -5, 9, -12, 15]));