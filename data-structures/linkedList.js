class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adds element at end of list
  add(element) {
    var node = new Node(element);
    var current;
    // If list is empty, add the element
    // and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // Iterate to the end of the list
      while (current.next) {
        current = current.next;
      }
      // Add node
      current.next = node;
    }
    this.size++;
  }

  // Insert element at the position index of the list
  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // Add the element to the first index
      if (index == 0) {
        node.next = head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // Adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // Removes element from specified location
  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // Delete first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // Iterate over the list to the
        // position to remove an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current !== null) {
      // Compare element with current element.
      // If found, then remove the current
      // element and return true.
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  /* ------------------ HELPER METHODS ----------------*/
  indexOf(element) {
    var count = 0;
    var current = this.head;

    while (current !== null) {
      if (current.element === element) return count;
      count++;
      current = current.next;
    }
    //not found
    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  size_of_list() {
    console.log(this.size);
    return this.size;
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
    return str; 
  }
}

module.exports = LinkedList; 


