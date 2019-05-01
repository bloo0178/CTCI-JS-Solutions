"use strict";
const Stack = require('./stack_min');

let testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(-1);

test("stack_min", () => {
    console.log(testStack);
    expect(testStack.min()).toBe(-1);
});

test("stack_min.pop()", () => {
    expect(testStack.pop()).toBe(-1);
})

test("stack_min - new min", () => {
    console.log(testStack);
    expect(testStack.min()).toBe(1);
})
