/*************************************************************
 * 【最接近0的两个数】                                         
 * 给定数组中找出和最接近0的两个值
 * 输入： [2, 3, 1, 7, -4, 8]                                               
 * 输出：-1
 * 核心思路：先排序，再首尾指针
 * 性能： 时间O(nlog(n)), 空间O(n)                    
 ************************************************************/
const quickSort = (arr) => {
  if(!Array.isArray(arr)) return -1;
  if(arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  arr.length = arr.length - 1;

  arr.map((item) => {
    if(item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  })
  return quickSort(left).concat(pivot, quickSort(right));
}

const nearZero = (_arr) => {
  let arr = quickSort(_arr);
  let left = 0, right = _arr.length - 1;
  let _diff = arr[left] + arr[right];
  let _left, _right;

  while(left < right) {
    let diff = arr[left] + arr[right];
    if(diff > 0) {
      if(diff < _diff) {
        _left = left;
        _right = right;
        _diff = diff;
      }
      right--;
    } else if(diff < 0) {
      if(diff < _diff) {
        _left = left;
        _right = right;
        _diff = diff;        
      }
      left++;
    } else {
      _left = left;
      _right = right;
      _diff = diff;
      break; 
    }
  }
  console.log(arr[_left], arr[_right]);
  return _diff;
}

let arr = [2, 3, 1, 7, -4, 8];
console.log(nearZero(arr));
