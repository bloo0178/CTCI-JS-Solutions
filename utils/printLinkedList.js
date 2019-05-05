function printLinkedList(node) {
    let res = []; 
    while(node) {
        res.push(node.val);
        node = node.next;
    }
    return res;
}

module.exports = printLinkedList;