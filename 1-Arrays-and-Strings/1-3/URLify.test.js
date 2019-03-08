const URLify = require('./URLify');

test('Mr John Smith', () => {
    expect(URLify("Mr John Smith", 13))
    .toBe("Mr%20John%20Smith")
})
