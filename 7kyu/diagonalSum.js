// Find sum of top-left to bottom-right diagonals
// Given a square matrix (i.e. an array of subarrays),
//  find the sum of values from the first value of the first array, 
// the second value of the second array, the third value of the third array, and so on...

function diagonalSum(matrix) {
  return matrix.reduce((acc, row, index) => acc + row[index], 0);
}