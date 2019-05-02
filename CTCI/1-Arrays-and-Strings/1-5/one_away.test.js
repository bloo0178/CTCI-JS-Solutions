const oneAway = require('./one_away');

test("pale, ple -> true", () => {
    expect(oneAway('pale', 'ple')).toBe(true);
})

test("pales, pale -> true", () => {
    expect(oneAway('pales', 'pale')).toBe(true);
})

test("pale, bale -> true", () => {
    expect(oneAway('pale', 'bale')).toBe(true);
})

test("pale, bake -> false", () => {
    expect(oneAway('pale', 'bake')).toBe(false);
})

test("pales, bke -> false", () => {
    expect(oneAway('pales', 'bke')).toBe(false);
})