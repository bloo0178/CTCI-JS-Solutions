const Node = require('../../../data-structures/listNode');
const deleteMiddleNode = require('./deleteMiddleNode');


test('second to last', () => {
    let testList = new Node(1);
    let nodeToDel = new Node(2); 
    testList.next = nodeToDel; 
    testList.add(3);
    testList.add(4);
    testList.add(5);
    deleteMiddleNode(nodeToDel); 

    console.log(testList);

    let expectedResult = new Node(1);
    expectedResult.add(3);
    expectedResult.add(4);
    expectedResult.add(5); 

    expect(testList)
    .toEqual(expectedResult);
})

test('remove c from a>b>c>d>e>f', () => {
    let testList = new Node('a');
    testList.add('b');
    testList.add('c');
    //let nodeToDel = new Node('c');
    //testList.next = nodeToDel;
    testList.add('d');
    testList.add('e');
    testList.add('f');

    let nodeToDel = testList.next.next;

    console.log(nodeToDel);
    console.log(testList);

    deleteMiddleNode(nodeToDel);

    let expectedResult = new Node('a');
    expectedResult.add('b');
    expectedResult.add('d');
    expectedResult.add('e');
    expectedResult.add('f');

    expect(testList).toEqual(expectedResult);
})