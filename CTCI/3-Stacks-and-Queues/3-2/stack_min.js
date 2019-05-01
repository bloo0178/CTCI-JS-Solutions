/*

How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

*/

"use strict";

class Stack {
    constructor() {
        this.items = [];
        this.minStack = []; // keeps track of previous mins for fallback
    }

    push(item) {
        if(this.minStack.length !== 0) {
            if(item <= this.minStack[this.minStack.length -1]){
                this.minStack.push(item); 
            }
        } else {
            this.minStack.push(item);
        }
        this.items.push(item);
    }

    pop() {
        if(this.items.length == 0) return false;
        let temp = this.items.pop();
        if(temp === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop(); 
        }
        return temp;
    }

    min() {
        if(this.minStack.length === 0) {
            return false;
        }
        return this.minStack[this.minStack.length - 1]; 
    }
}

module.exports = Stack;