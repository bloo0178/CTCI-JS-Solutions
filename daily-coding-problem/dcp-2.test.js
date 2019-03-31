const productArr = require("./dcp-2");

test('[1, 2, 3, 4, 5]', () => {
    let nums = [1,2,3,4,5];
    expect(productArr(nums)).toEqual([120, 60, 40, 30, 24]);
})