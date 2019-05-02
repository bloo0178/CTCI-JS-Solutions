"use strict";

/*

There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

Hints:
#23, Start with the easy thing. Can you check each of the conditions separately?

#97, What is the relationship between the "insert character" option and the "remove character"
option? Do these need to be two separate checks?

#130 Can you do all three checks in a single pass?

*/

function oneAway (s1, s2) {
    if(s1.length === s2.length) return oneAwayReplace(s1, s2);
    else if (s1.length + 1 === s2.length) return oneAwayInsert(s1, s2);
    else if (s1.length - 1 === s2.length) return oneAwayInsert(s2, s1);
    return false;
}

function oneAwayReplace(s1, s2) {
    let foundDifference = false;
    for(let i = 0 ; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            if (foundDifference) return false;
            foundDifference = true;
        }
    }
    return true; 
}

function oneAwayInsert (s1, s2) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < s2.length && index1 < s1.length) {
        if (s1.charAt(index1) != s2.charAt(index2)) {
            if (index1 != index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}


module.exports = oneAway;

