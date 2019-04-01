const recursiveSum = require('./ga-4-1');

test('[1, 2, 3, 4, 5]', () => {
    let nums = [1,2,3,4,5];
    expect(recursiveSum(nums)).toEqual(15);
})