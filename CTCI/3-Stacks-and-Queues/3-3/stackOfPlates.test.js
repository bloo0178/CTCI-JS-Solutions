const SetOfStacks = require("./stackOfPlates");

let test1 = new SetOfStacks();
test1.push(1);
test1.push(2);
test1.push(3);
test1.push(4);
test1.push(5);

test("SetOfStacks - 1", () => {
	expect(test1.stacks).toEqual([[1, 2, 3], [4, 5]]);
});

test("SetOfStacks - 2", () => {
	expect(test1.pop()).toEqual(5);
	expect(test1.stacks).toEqual([[1, 2, 3], [4]]);
});

console.log(test1);

test("SetOfStacks - 3", () => {
	test1.pop();
	test1.pop();
	test1.pop();
	test1.pop();
	test1.pop();
	expect(test1.stacks).toEqual([[]]);
	expect(test1.pop()).toEqual(undefined);
});

console.log(test1);
