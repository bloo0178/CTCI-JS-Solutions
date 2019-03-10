const LinkedList = require('../linkedList'); 

function test() {
    let test = new LinkedList();
    test.add(5);
    test.printList();
    console.log(test.head);
}

test();