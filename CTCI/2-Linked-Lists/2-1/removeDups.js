/*

# Instructions: 
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
Hints: #9, #40

# Questions: 
-Are we working with a singly linked list or a doubly linked list?
-What are the parameters for the function? Can we assume the head of the list is passed in?
-Will the input list always be non-null?
-Should the function return anything in particular?

*/

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