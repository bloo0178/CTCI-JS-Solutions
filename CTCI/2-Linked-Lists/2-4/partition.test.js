"use strict";

const printLinkedList = require('../../../utils/printLinkedList');
const Node = require('../../../data-structures/listNode');
const partition = require('./partition');

let testList = new Node(1);
let head = testList; 
testList.add(10);
testList.add(2);
testList.add(9);
testList.add(3);
testList.add(8);
testList.add(4);
testList.add(7);

let expectedResult = [1,2,3,4,5,10,9,8,7];

test("Partition: 5; 1 -> 10 -> 2 -> 9 -> 3 -> 8 -> 4 -> 7", () => {
    let result = partition(head, 5); 
    console.log(printLinkedList(result));
    expect(printLinkedList(result)).toEqual(expectedResult);
})





