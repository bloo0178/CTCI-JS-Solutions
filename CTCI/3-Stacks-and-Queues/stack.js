class Stack {

    constructor() {
        this.items = [];
    }

    // Adds item to top of stack
    push(item) {
        this.items.push(item);
    }

    // Returns topmost item of stack and removes it
    pop() {
        if(this.items.length == 0) return false;
        return this.items.pop();
    }

    // Returns the topmost item without removing it
    peek() {
        return this.items[this.items.length - 1]; 
    }

    // Returns true if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Stack; 