const checkPairSum = require('./dcp-1');

test('[10, 15, 3, 7] and k of 17', () => {
    let nums = [10,15,3,7];
    let k = 17;
    expect(checkPairSum(nums, k)).toBe(true);
})

test('[1,2,3,4] and k of 20', () => {
    let nums = [1,2,3,4];
    let k = 20;
    expect(checkPairSum(nums, k)).toBe(false);
})