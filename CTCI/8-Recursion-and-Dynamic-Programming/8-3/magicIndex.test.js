const main = require("./magicIndex");

let test1 = [-10, 0, 1, 2, 4];
let test2 = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
let test3 = [1, 2, 3, 4];

test("[-10, 0, 1, 2, 4]", () => {
	expect(main(test1)).toBe(4)
})

test("[-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]", () => {
	expect(main(test2)).toBe(7)
})

test("[1, 2, 3, 4]", () => {
	expect(main(test3)).toBe(-1)
})
