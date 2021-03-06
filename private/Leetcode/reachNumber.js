/*************************************************************
 * 【到达终点数字】   
 * 题目：在一根无限长的数轴上，你站在0的位置。终点在target的位置。每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。返回到达终点需要的最小移动次数。
 * 思路：
 *   左右走等概率且对称，因此只选择正半轴;
 *   递推前几步: 
 *     1: 1
 *     2: 3, 1
 *     3: 6, 4, 2, 0
 *     4: 10, 8, 6, 4, 2, 0
 *     ... (每一步都是上一步的位置左/右走，并取正)
 *     n: n(n+1)/2, n(n+1)/2-2, n(n+1)/2-4, ...
 *   规律: max(f(n)) = max(f(n-1)) + n; && target <= max(f(n)) && 两者同奇同偶
 * 性能：时间O(n), 空间O(1)
 ************************************************************/

const reachNumber = target => {
  let sum = 0;
  let n = 0;
  target = Math.abs(target);

  while(sum < target || (sum + target) % 2 !== 0) {
    n++;
    sum += n;
  }
  return n;
}

console.log(reachNumber(1000));