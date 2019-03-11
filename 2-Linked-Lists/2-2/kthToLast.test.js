const Node = require('../node');
const kthToLast = require('./kthToLast');

test('second to last', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(3);
    testList.add(4);

    expect(kthToLast(2, testList))
    .toEqual(3);
})

test('third to last', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(3);
    testList.add(4);

    expect(kthToLast(3, testList))
    .toBe(2);
})

test('last', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(3);
    testList.add(4);

    expect(kthToLast(1, testList))
    .toBe(4);
})

test('k > list length', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(3);
    testList.add(4);

    expect(kthToLast(7, testList))
    .toBe(false);
})

