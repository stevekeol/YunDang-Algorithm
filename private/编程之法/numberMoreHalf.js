/*************************************************************
 * 【超过一半的数】                                         
 * 给定一个数组，该数组中某个值的个数超过了一半，找出该值
 * 输入： [8, 1, 2, 3, 8, 8, 8]                                              
 * 输出： 8
 * 核心思路1: 排序后取arr[n/2]即可，时间：O(nlog(n)),空间O(1)
 * 核心思路2：散列表，遍历一次统计出各数的次数，再遍历一次找出次数超过一半的数。时间:O(n)；空间O(n)
 * 核心思路3：玉石俱焚法：每次删除两个不同的数。时间：O(n); 空间:O(1)
 * 核心思路4：弹性复原法：记录两个值current和count;遇到同值，count++；不同值，count--。当count==0，current=下一个值。时间：O(n), 空间O(1)
 ************************************************************/

//弹性复原法
const numberMoreHalf = (arr) => {
  let current = arr[0];
  let count = 1;

  arr.forEach((item, index) => {
    count = (item == current) ? count + 1 : count - 1;
    if(count === 0) current = arr[index + 1];
  })
  return current;
}

let test = [8, 1, 2, 3, 8, 8, 8];
console.log(numberMoreHalf(test));