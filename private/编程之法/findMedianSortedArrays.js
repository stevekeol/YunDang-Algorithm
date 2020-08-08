/*************************************************************
 * 【寻找两个有序数组的中位数】                                         
 * 给定两个数组
 * 输入: [1, 3]和[2], 输出2                                           
 * 输入: [1, 3]和[2, 4], 输出2.5
 * 思路：
 *     0. "折半舍弃"
 *     1. 明确中位数的取法: ((m + n + 1)/2 + (m + n + 2)/2)/2
 *     2. 核心功能函数: findMedianSortedArraysCore(arr1, i, arr2, j, k) - 获取两个数组("合并后")的核心
 *     3. 边界条件的处理: 其中一个为空数组时; k为1时;
 *     4. “折半舍弃”中，“半”的选取！即k,剩余arr1,剩余arr2中最小的值;
 *     5. 折半后，选取各自最大值比较，谁小，就抛弃那一部分小的。两个数组的剩余部分，重新上述步骤
 * 性能：时间O(log(m+n)), 空间O(1)
 ************************************************************/
const findMedianSortedArrays = (arr1, arr2) => {
  let indexLeft = Math.floor((arr1.length + arr2.length + 1) / 2);
  let indexRight = Math.floor((arr1.length + arr2.length + 2) / 2);

  return (findMedianSortedArraysCore(arr1, 0, arr2, 0, indexLeft) 
        + findMedianSortedArraysCore(arr1, 0, arr2, 0, indexRight)) / 2;
}

const findMedianSortedArraysCore = (arr1, i, arr2, j, k) => {
  if(arr1.length - 1 < i) 
    return arr2[j + k - 1];

  if(arr2.length - 1 < j)
    return arr1[i + k - 1];

  if(k === 1)
    return Math.min(arr1[i], arr2[j]);

  //“折半舍弃”中，较小部分的位置
  let dropIndex = Math.min(Math.floor(k / 2), arr1.length - 1, arr2.length - 1);
  let value1 = arr1[i + dropIndex - 1];
  let value2 = arr2[j + dropIndex - 1];
  return value1 < value2 
        ? findMedianSortedArraysCore(arr1, i + dropIndex, arr2, j, k - dropIndex)
        : findMedianSortedArraysCore(arr1, i, arr2, j + dropIndex, k - dropIndex);
}

let a = [1, 3, 5, 9, 11, 14];
let b = [2, 4, 6, 7, 8];
console.log(findMedianSortedArrays(a, b))