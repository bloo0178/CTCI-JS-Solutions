const LinkedList = require('./linkedList');

test('Linked List', () => {
    var ll = new LinkedList();
    expect(ll.isEmpty())
    .toBe(true);
    ll.add(10); 
    expect(ll.printList())
    .toBe('10 '); 
    expect(ll.size_of_list())
    .toBe(1);
    ll.add(20);
    ll.add(30);
    ll.add(40);
    ll.add(50);
    expect(ll.printList())
    .toBe('10 20 30 40 50 ');
    ll.removeElement(50);
    expect(ll.printList())
    .toBe('10 20 30 40 ');
    expect(ll.indexOf(40))
    .toBe(3);
    ll.insertAt(60, 2);
    expect(ll.printList())
    .toBe('10 20 60 30 40 ')
    expect(ll.isEmpty())
    .toBe(false)
    ll.removeFrom(3);
    expect(ll.printList())
    .toBe('10 20 60 40 ');
})




// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/