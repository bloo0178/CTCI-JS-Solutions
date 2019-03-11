const Node = require('../node');
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