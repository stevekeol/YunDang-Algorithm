/*************************************************************
 * 【接雨水-leetcode_42】                                         
 * 给定一个整数字符串，每个整数表示宽度为1的柱高，求下雨后能接多少雨水
 * 输入： [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]   
 * 输出： 6                                 
 * 核心思路： 维持一个降序的栈
 * 注： 时间复杂度: O(n); 空间复杂度: O(n)
 ************************************************************/

//先实现一个栈
function Stack(){
  let items = [];     //用来保存栈里的元素
  this.push = function (item) {
      items.push(item);
  }
  this.pop = function () {
      return items.pop();
  }
  this.peek = function () {
      return items[items.length-1];
  }
  this.isEmpty = function () {
      return items.length == 0;
  }
  this.size = function () {
      return items.length;
  }
  this.clear = function () {
      items = [];
  }
  this.print = function() {
    return items.toString();
  }
}

const rainBowl = (arr) => {
  let stack = new Stack();
  let tempStack = new Stack();
  let MAX = 0;
  let res = 0;

  arr.map((current) => {
    console.log('current: ' + current);
    if(current >= MAX) {
      while(!stack.isEmpty()) {
        res += MAX - stack.pop();
      }
      MAX = current;
      stack.push(current);
    } else {
      if(current > stack.peek()) {
        while(!stack.isEmpty()) {
          let item = stack.pop();
          if(item < current) {
            res += current - item;
            tempStack.push(current);
          } else {
            tempStack.push(item);
          }
        }
        while(!tempStack.isEmpty()) {
          stack.push(tempStack.pop());
        }
      }
      stack.push(current);
    }
  })
  return res;
}

console.log(rainBowl([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));