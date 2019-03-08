const isUnique = require('./isUnique');

test('abcd', () => {
    expect(isUnique('abcd')).toBe(true);
});

test('abbd', () => {
    expect(isUnique('abbd')).toBe(false);
});
