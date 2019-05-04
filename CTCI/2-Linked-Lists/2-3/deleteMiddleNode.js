/*

# Instructions
Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node
Hints:#72

# Example: 
- lnput:the node c from the linked lista->b->c->d->e->f
- Result: nothing is returned, but the new linked list looks like a->b->d->e->f

*/

function deleteMiddleNode(node) {
    node.val = node.next.val; 
    node.next = node.next.next; 
}

module.exports = deleteMiddleNode; 