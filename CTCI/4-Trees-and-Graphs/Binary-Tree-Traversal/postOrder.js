function printPostOrder(root) {
  result = [];

  function postOrder(node) {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);
      result.push(node.val);
    }
  }

  postOrder(root);

  return result;
}

module.exports = printPostOrder;
