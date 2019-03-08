const checkPermutation = require('./checkPermutation');

test('dog + god', () => {
    let str1 = "dog";
    let str2 = "god";
    expect(checkPermutation(str1, str2)).toBe(true);
});

test('dog + good', () => {
    let str1 = "dog";
    let str2 = "good";
    expect(checkPermutation(str1, str2)).toBe(false);
});