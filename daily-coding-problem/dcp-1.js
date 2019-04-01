/* 

Rating: Easy

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

*/

function checkPairSum(nums, k) {
  let j;

  for (let i = 0; i < nums.length - 1; i++) {
    j = i + 1;
    while (nums[j]) {
      if (nums[i] + nums[j] === k) return true;
      j++;
    }
  }

  return false;
}

module.exports = checkPairSum;

/* 

Edge Cases:
-Will nums always have at least 2 numbers?
-Should the function return true if one number alone equals k?

*/
