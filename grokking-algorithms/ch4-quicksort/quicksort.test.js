const quicksort = require('./quicksort');

test('quicksort1', () => {
    let arr = [4,32,6,2,7,9];
    expect(quicksort(arr)).toEqual([2,4,6,7,9,32]);
})