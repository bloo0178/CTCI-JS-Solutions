class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }

  add(element) {
    var node = new Node(element);
    var current;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

module.exports = Node; 
