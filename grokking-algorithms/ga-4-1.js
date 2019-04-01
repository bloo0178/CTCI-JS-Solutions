/*

Write out a recursive function to sum an array.

*/

function recursiveSum(arr) {
  // base cases
  if (arr === null) return 0;
  if (arr.length === 1) return arr[0];
  // recursive case
  let num = arr[0];
  arr.shift();
  return num + recursiveSum(arr);
}

module.exports = recursiveSum;
