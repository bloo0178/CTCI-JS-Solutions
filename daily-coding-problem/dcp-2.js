/* 

Rating: Hard

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

*/

function productArr(nums) {
  let res = [];
  let curPointer = 0;
  let tempSum = 1;

  while (curPointer < nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (i !== curPointer) {
        tempSum *= nums[i];
      }
      if (i + 1 === nums.length) {
        res.push(tempSum);
        curPointer++;
        tempSum = 1;
      }
    }
  }
  return res;
}

module.exports = productArr;

/*

Notes:

*/
