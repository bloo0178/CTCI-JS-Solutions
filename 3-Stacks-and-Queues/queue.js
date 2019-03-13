class Queue {
  constructor() {
    this.items = [];
  }

  // add item to the end of the queue
  add(item) {
    this.items.push(item);
  }

  // remove the front item in the queue and return it
  remove() {
    if (this.isEmpty()) return false;
    return this.items.shift();
  }

  // returns the front item in the queue
  peek() {
    if (this.isEmpty()) return false;
    return this.items[0];
  }

  // returns true if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Queue; 