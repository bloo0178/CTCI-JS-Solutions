const Node = require('../node'); 

function kthToLast(k, head) {

    let count = 1; 
    let cur = head;
    let prev = head; // p2 doesn't start until count = k; 

    while(cur) {
        if(!cur.next && count >= k) return prev.val; 
        if(count < k) {
            count++;
        } else {
            prev = prev.next;
        }
        cur = cur.next;
    }

    return false; 
}

module.exports = kthToLast; 