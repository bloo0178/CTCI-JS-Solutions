const Node = require("../../../data-structures/treeNode");
const printInOrder = require('./inOrder');

let testTree = new Node(1); 
testTree.left = new Node(2);
testTree.left.left = new Node(3); 
testTree.left.right = new Node(4);
testTree.right = new Node(5);
testTree.right.left = new Node(6);
testTree.right.right = new Node(7);
testTree.right.right.left = new Node(0);

/*
                1
            /       \
           2         5
        /    \      /  \
      3      4     6    7
                       / 
                      0
*/

test('print test tree', () => {
    expect(printInOrder(testTree))
    .toEqual([3,2,4,1,6,5,0,7])
})