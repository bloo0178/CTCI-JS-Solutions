const Stack = require('./stack');

test('stack class test', () => {
    let testStack = new Stack(); 
    expect(testStack.isEmpty())
    .toBe(true);
    testStack.push(1); 
    expect(testStack)
    .toEqual({"items": [1]});
    testStack.push(2); 
    expect(testStack.peek())
    .toBe(2);
    expect(testStack.pop())
    .toBe(2);
    expect(testStack.peek())
    .toBe(1);
    expect(testStack.isEmpty())
    .toBe(false);
    testStack.pop();
    expect(testStack.isEmpty())
    .toBe(true);
})