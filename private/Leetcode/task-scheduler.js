/*************************************************************
 * 【到达终点数字】  
 * 来源: https://leetcode-cn.com/problems/task-scheduler/ 
 * 题目：给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。
 * 其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。
 * 在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
 * 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的 最短时间 。
 *

 * 输入：tasks = ["A","A","A","B","B","B"], n = 2
 * 输出：8
 * 解释：A -> B -> () -> A -> B -> () -> A -> B

 * 输入：tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * 输出：16
 * 解释：一种可能的解决方案是： A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> () -> () -> A -> () -> () -> A


 * 思路1（假设所有任务key都是[A-Z]）：
 *   将求解最小时间的问题，转换为求解图的面积
 *   
 *   A X X
 *   A X X
 *   A - -
 *   
 *   行数 = 最多元素的个数;
 *   列数 = 冷却时间 + 1;
 *   面积 = 除去最后一行的面积 + 最后一行非-的元素 = Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
 *   其中: max 为次数最多的元素的次数, maxCount为次数一样最多的元素的个数(含自己), n是冷却时间
 * 性能：时间O(n), 空间O(n)
 ************************************************************/

const tasks = ['A', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'B', 'D', 'D', 'E', 'C', 'C', 'C'];
const n = 2;

// 假设所有任务key都是[A-Z]
const leastInterval = (tasks, n, h = Array(26).fill(0)) => {
  if (n === 0) return tasks.length
  for(let i = 0; i < tasks.length; i++) 
    h[tasks[i].charCodeAt() - 65]++
  const max = Math.max(...h), maxCount = 0 // 擅于利用已有工具!
  h.forEach(n => n === max && maxCount++);
  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};

console.log(leastInterval(tasks, n));

// const leastInterval = function(tasks, n) {
//   if(n == 0) {
//     return tasks.length;
//   }

//   let length = 0;
//   let { map, arr } = test(tasks);
//   while(arr.length > 0) {
//     if(arr.length >= (n + 1)) {
//       length += arr[n][1] * (n + 1);
//       map.delete(arr[n][0]);
//       for(let i = 0; i < n + 1; i ++) {
//         arr[i][1] = arr[i][i] - arr[n][1];
//       }
//     } else {
//       while(n > 1) {

//       }
//     }


//     // if(arr.length == n) {
//     //   length += arr[n - 1][1] * (n + 1);
//     //   map.delete(arr[n - 1][0]);
//     // } else if((n - 1) > 0 && arr.length == (n - 1)) {
//     //   length += arr[n - 2][1] * (n + 1);
//     //   map.delete(arr[n - 2][0]);
//     // }
//   }
// };

// const test = tasks => {
//   let map = new Map();
//   tasks.map(task => {
//     if(map.get(task)) {
//       let newValue = map.get(task) + 1
//       map.set(task, newValue);
//     } else {
//       map.set(task, 1);
//     }
//   })
//   console.log(map)
//   let arr = [...map];

//   arr.sort((x, y) => y[1] - x[1]);
//   console.table(arr);
//   return {map, arr};
// }

// console.log(test(tasks))

