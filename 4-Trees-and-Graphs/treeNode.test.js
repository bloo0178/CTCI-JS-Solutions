const Node = require("./treeNode");

test("build a tree", () => {
  let tree = new Node(1);
  tree.left = new Node(2);
  //tree.right = new Node(3);
  expect(tree)
    .toEqual({
      left: { left: null, right: null, val: 2 },
      right: null,
      val: 1
    });
});
