/*
 *  Questions:
 *  -Is the permutation comparison case sensitive?
 *  -Should white-space be factored in to the comparison?
 *  -Will str1 and str2 always be not null?
 *
 *  Assumptions:
 *  -case doesn't matter
 *  -white-space isn't considered
 */

function checkPermutation(str1, str2) {
  let hash = {};
  let hash2 = {};

  // Populate each str into a hash and compare equality.
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in hash) {
      hash[str1[i]] += 1;
    } else {
      hash[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in hash2) {
      hash2[str2[i]] += 1;
    } else {
      hash2[str2[i]] = 1;
    }
  }

  for (let i in hash) {
    if (!i in hash2) return false;
    if (hash[i] !== hash2[i]) return false;
  }
  return true;
}

module.exports = checkPermutation;
