/*************************************************************
 * 【从1-n中随即输出m个不重复的数。】                                         
 * 思路：在数组中随机取一个位置，将该位置和数组最后一位的值互换；并将最后位置前移。重复上述过程。
 * 性能：时间O(m), 空间O(n)
 ************************************************************/

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const mUniqueNum = (n, m) => {
  let arr = Array.from({ length: n }, (item, index) => index + 1);
  let endIndex = arr.length - 1;
  while(m) {
    let curIndex = Math.floor(Math.random() * endIndex);
    swap(arr, curIndex, endIndex);
    endIndex--;
    m--;
  }
  return arr.slice(endIndex + 1, arr.length);
}

console.log(mUniqueNum(100, 10));