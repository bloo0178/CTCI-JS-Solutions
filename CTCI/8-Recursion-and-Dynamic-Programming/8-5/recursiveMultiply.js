/*

Write a recursive function to multiply two positive integers without using the
*operator.You can use addition, subtraction, and bit shifting, but you should minimize the number
of those operations.

Hints: 
#166, 
#203, 
#227, 
#234, 
#246, 
#280

*/

function recursiveMultiply(a, b) {
	let bigger = a < b ? b : a;
	let smaller = a < b ? a : b;

	if (smaller === 0) {
		return 0;
	} else if (smaller === 1) {
		return bigger;
	} else {
		return bigger + recursiveMultiply(bigger, smaller - 1);
	}
}

module.exports = recursiveMultiply;
