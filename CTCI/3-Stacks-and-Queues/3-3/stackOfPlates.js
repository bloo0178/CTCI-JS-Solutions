/*

Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
(that is, pop () should return the same values as it would if there were just a single stack).

FOLLOW UP
Implement a function popAt( int index) which performs a pop operation on a specific sub-stack.

Hints:
#64, 
#87

*/

function SetOfStacks() {
	this.stacks = [[]];
}

SetOfStacks.prototype.push = function(val) {
	let lastStackIndex = this.stacks.length - 1;
	if (this.stacks[lastStackIndex].length > 2) {
		this.stacks.push([val]);
	} else {
		this.stacks[lastStackIndex].push(val);
	}
	return this.stacks[lastStackIndex].length;
};

SetOfStacks.prototype.pop = function() {
	let lastStackIndex = this.stacks.length - 1;
	let res;
	if (this.stacks[lastStackIndex].length < 1 && lastStackIndex > 0) {
		res = this.stacks[lastStackIndex].pop();
		this.stacks.splice(lastStackIndex, 1);
	} else {
		res = this.stacks[lastStackIndex].pop();
	}
	return res;
};

module.exports = SetOfStacks;

