const Node = require('../node'); 

function removeDups(head) {
    
    let hash = {}; 
    let cur = head; 
    let prev = null;

    while(cur) {
        if(cur.val in hash) {
            prev.next = cur.next;
        } else {
            hash[cur.val] = 1;
        }
        prev = cur;
        cur = cur.next;
    }

    return head; 
}

module.exports = removeDups; 