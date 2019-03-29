const Node = require("../treeNode");

function printPreOrder(root) {
  result = [];

  function preOrder(node) {
    if (node !== null) {
      result.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  preOrder(root);

  return result;
}

module.exports = printPreOrder;
