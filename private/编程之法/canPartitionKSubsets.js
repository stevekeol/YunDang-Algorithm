/*************************************************************
 * 【划分为K个相等的子集】                                         
 * 给定一个整数数组nums和一个正整数K，找出是否有可能把这个数组分成K个非空子集，其总和相等
 * 输入： nums=[4, 3, 2, 3, 5, 2, 1], K = 4                                              
 * 输出： true
 * 注： 1 <= k <= nums.length <= 16; 0 < nums[i] < 10000              
 ************************************************************/
const canPartitionKSubsets = (nums, k) => {
  let sum = 0;
  for(let n of nums) sum += n;
  if(sum % k !== 0) return false;
  
  let subSum = sum / k;
  nums.sort((a, b) => b - a); //降序排列
  if(nums[0] > subSum) return false;

  
}