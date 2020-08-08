/*************************************************************
 * 【三个只出现一次的数】                                         
 * 一个数组中，有三个数只出现一次，其他数都出现两次，找出这三个数
 * 输入： [1, 2, 3, 2, 4, 4, 5]                                             
 * 输出： [1, 3, 5]
 * 核心思路: 哈希集
 * 性能： 时间O(n), 空间O(n)           
 ************************************************************/
const threeUnique = (arr) => {
  let hash = {};
  arr.map((item) => {
    if (hash[item]) {
      delete hash[item]
    } else {
      hash[item] = true;
    }
  })
  return Object.keys(hash);
}

const example = [1, 2, 3, 2, 4, 4, 5];
console.log(threeUnique(example));