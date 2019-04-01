/*

Write a recursive function to count the number of items in a list.

*/

function recursiveListLength(node) {
  // base case
  if (!node) return 0;
  // recursive case
  return 1 + recursiveListLength(node.next);
}

module.exports = recursiveListLength; 