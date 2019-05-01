const palindromePermutation = require("./palindromePermutation");

test("racecar", () => {
  expect(palindromePermutation("racecar")).toBe(true);
});

test("tact coa", () => {
    expect(palindromePermutation('tact coa')).toBe(true);
})

test("abc", () => {
    expect(palindromePermutation('abc')).toBe(false);
})
