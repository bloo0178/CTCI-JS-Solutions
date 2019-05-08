const recursiveMultiply = require("./recursiveMultiply");

test("10 * 400", () => {
	expect(recursiveMultiply(10, 400)).toEqual(4000);
});

test("0 * 400", () => {
	expect(recursiveMultiply(0, 400)).toEqual(0);
});
