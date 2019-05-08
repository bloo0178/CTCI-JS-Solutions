/*

A magic index in an array A [ 0 ••• n -1] is defined to be an index such that A[ i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A.
FOLLOW UP
What if the values are not distinct?
Hints:#770, #204, #240, #286, #340

*/


function main(arr){ 
    return magicIndex(arr, 0, arr.length - 1);
}

function magicIndex(arr, start, end) {
    if (end < start) {
        return -1;
    }
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == mid ) {
        return mid;
    } else if (arr[mid] > mid) {
        return magicIndex(arr, start, mid - 1);
    } else {
        return magicIndex(arr, mid + 1, end); 
    }
}

module.exports = main;
