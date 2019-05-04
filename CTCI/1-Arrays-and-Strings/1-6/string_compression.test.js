"use strict";

const stringCompress = require("./string_compression");

test("abbcccddddeeeeeffffggghhi", () => {
  expect(stringCompress("abbcccddddeeeeeffffggghhi")).toBe("a1b2c3d4e5f4g3h2i1");
});


test("abcd", () => {
    expect(stringCompress('abcd')).toBe('abcd');
})
