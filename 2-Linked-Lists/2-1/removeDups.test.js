const Node = require('../node');
const removeDups = require('./removeDups');

test('removeDups from end', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(3);
    testList.add(3);

    let expectedResult = new Node(1);
    expectedResult.add(2);
    expectedResult.add(3);

    expect(removeDups(testList))
    .toBe(expectedResult);
    console.log(testList); 
    console.log(expectedResult);
})

test('removeDups from middle', () => {
    let testList = new Node(1); 
    testList.add(2);
    testList.add(2);
    testList.add(3);

    let expectedResult = new Node(1);
    expectedResult.add(2);
    expectedResult.add(3);

    expect(removeDups(testList))
    .toBe(expectedResult);
    console.log(testList); 
    console.log(expectedResult);
})