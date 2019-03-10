const Node = require('./node'); 

test('Node', () => {
    let head = new Node(12); 
    expect(head.val)
    .toBe(12)
    expect(head.next)
    .toBe(null);
})