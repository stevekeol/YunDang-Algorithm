/*************************************************************
 * 【盛最多的水】                                         
 * 给定一个整数数组，找出其中两条线，其构成的容器可以盛最多的水
 * 示例：  [1, 8, 6, 2, 5, 4, 8, 3, 7] => 49
 * 核心思路： 首尾双指针 ,较小值往里走
 ************************************************************/
const maxArea = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let area = 0;

  while(left < right) {
    if(arr[left] <= arr[right]) {
      area = arr[left] * (right - left) > area ? arr[left] * (right - left) : area;
      left++;
    } else {
      area = arr[right] * (right - left) > area ? arr[right] * (right - left) : area;
      right--;      
    }
  }
  return area;
}

let arrTest = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arrTest)); //49