function deleteMiddleNode(node) {
    node.val = node.next.val; 
    node.next = node.next.next; 
}

module.exports = deleteMiddleNode; 