/*

Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)

Assumptions: 
-Ignore case
-Ignore spaces

Hints: #106, #121, #134, #136

#106 - You do not have to-and should not-generate all permutations. This would be very
inefficient.

#121 - What characteristics would a string that is a permutation of a palindrome have?

#134 - Have you tried a hash table? You should be able to get this down to 0( N) time.

# 136 - Can you reduce the space usage by using a bit vector?

*/

"use strict";

function palindromePermutation (s) {

    let hash = {}; 
    let singleCount = 0;

    // generate a hash table of all chars: counts
    for(let i = 0; i < s.length; i++) {
        if(s[i] in hash) {
            hash[s[i]] += 1;
        } 
        else if (s[i] !== ' ') {
            hash[s[i]] = 1;
        }
    }

    // Condition that needs to be satisfied: all chars except *at most* one should have counts that are % 2. 
    for(let char in hash) {
        if(hash[char] % 2 !== 0) {
            singleCount += 1;
        }
    }

    if(singleCount <= 1) return true;
    return false;
};

module.exports = palindromePermutation;
