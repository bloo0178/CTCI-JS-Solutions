const Queue = require("./queue");

let testQueue = new Queue();

test("isEmpty on empty", () => {
  expect(testQueue.isEmpty()).toBe(true);
});

test("add(1) and peek", () => {
  testQueue.enqueue(1);
  expect(testQueue.peek()).toBe(1);
});

test("isEmpty on non-empty", () => {
  expect(testQueue.isEmpty()).toBe(false);
});

test("add(2) and peek", () => {
  testQueue.enqueue(2);
  expect(testQueue.peek()).toBe(1);
});

test("remove, remove, peek = false", () => {
  testQueue.dequeue();
  testQueue.dequeue();
  expect(testQueue.peek()).toBe(false);
});
