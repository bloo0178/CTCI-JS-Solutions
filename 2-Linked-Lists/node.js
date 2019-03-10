class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    var node = new Node(val);
    var current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

module.exports = Node; 
