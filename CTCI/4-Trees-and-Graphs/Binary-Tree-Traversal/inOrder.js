

/*function inOrder(node) {
    if(node !== null) {
        inOrder(node.left);
        return node.val;
        inOrder(node.right); 
    }
}*/

function printInOrder(root) {
  result = [];

  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      result.push(node.val);
      inOrder(node.right);
    }
  }

  inOrder(root);

  return result;
}

module.exports = printInOrder;
