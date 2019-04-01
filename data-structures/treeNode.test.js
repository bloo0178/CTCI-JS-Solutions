const Node = require("./treeNode");

let testTree = new Node(1); 
testTree.left = new Node(2);
testTree.left.left = new Node(3); 
testTree.left.right = new Node(4);
testTree.right = new Node(5);
testTree.right.left = new Node(6);
testTree.right.right = new Node(7);
testTree.right.right.left = new Node(0);

test("build a tree", () => {
  let tree = new Node(1);
  tree.left = new Node(2);
  expect(tree)
    .toEqual({
      left: { left: null, right: null, val: 2 },
      right: null,
      val: 1
    });
});

test("nested val", () => {
    expect(testTree.right.right.left.val)
    .toBe(0);
})
