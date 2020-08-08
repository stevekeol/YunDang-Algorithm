/*************************************************************
 * 【行列递增矩阵的查找】                                         
 * 给定一个m行n列的二维数组，每行从左至右递增；每列从上至下递增。同时给定一个数值，判断该数值是否在该数组中。
 * 输入arr[][]和6： 
 * 1 2  8  9
 * 2 4  9 12
 * 4 7 10 13
 * 6 8 11 15
 * 输出： true                                                                8 9      4 7
 * 核心思路1： 分治法：判断(规律)递增的对角线和给定值，该题中，4 < 6 < 10。故只考虑 9 12  和 6 8 两个矩阵。
 * 核心思路2：定位法：右上角开始，比6大则左移，比6小则下移。 （涉及二维数组，此处选用C语言）
 * 注： 该程序尚未测试
 ************************************************************/

# define ROW 4
# define COL 4

bool youngMatrix(int arr[ROW][COL], int searchKey) {
  int i = 0;
  int j = COL - 1;

  while(i <= ROW && j >= 0) {
    if(arr[i][j] < searchKey) {
      j++
    } else if (arr[i][j] > searchKey) {
      i--;
    } else {
      return true;
    }
  }
  return false;
}