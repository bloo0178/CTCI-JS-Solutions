const Node = require('../node'); 

function removeDups(head) {
    
    let hash = {}; 
    let cur = head; 

    while(cur.next) {
        if(cur.val in hash) {
            // Need to change cur.next, NOT cur.val.
            // This requires keeping a pointer to prev OR
            // validating that there is a cur.next.next... 
            cur.val = cur.next; 
        } else {
            hash[cur.val] = 1;
        }
        cur = cur.next;
    }

    return head; 
}

module.exports = removeDups; 

/*
-store values in hash table
-
*/