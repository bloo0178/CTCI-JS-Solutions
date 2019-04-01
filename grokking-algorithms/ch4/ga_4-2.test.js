const recursiveListLength = require('./ga_4-2'); 
const Node = require('../../data-structures/listNode');

let newList = new Node(2);
newList.add(3);
newList.add(5); 

test('length of 3', () => {
    expect(recursiveListLength(newList)).toEqual(3);
})