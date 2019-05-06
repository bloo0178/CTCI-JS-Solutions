const sumLists = require('./sumLists');
const Node = require('../../../data-structures/listNode');
const printLinkedList = require('../../../utils/printLinkedList');

let test1 = new Node(1);
test1.add(2);

let t1l1 = new Node(7);
t1l1.add(1);
t1l1.add(6);

let t1l2 = new Node(5)
t1l2.add(9);
t1l2.add(2);

test("7 -> 1 -> 6; 5 -> 9 -> 2", () => {
    expect(printLinkedList(sumLists(t1l1, t1l2))).toEqual([2,1,9])
})