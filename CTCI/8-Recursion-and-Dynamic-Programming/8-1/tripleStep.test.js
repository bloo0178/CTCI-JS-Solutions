const main = require('./tripleStep');

test("n = 4", () => {
    expect(main(4)).toBe(7);
})

test("n = 3", () => {
    expect(main(3)).toBe(4);
})