"use strict";

/*

Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

Hints:
#92, Do the easy thing first. Compress the string, then compare the lengths.

#110 Be careful that you aren't repeatedly concatenating strings together. This can be very
inefficient.

*/

function stringCompress(str) {
  let compressedString = "";
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    // If next char is different, append this char to the result.
    if (i + 1 > str.length || str[i] !== str[i + 1]) {
      compressedString += "" + str[i] + countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressedString.length < str.length ? compressedString : str;
}

function stringBuilder() {
  var builder = [];
  builder.push("some", "123");
  builder.push("content");
  var str = builder.join("");
}

module.exports = stringCompress;
