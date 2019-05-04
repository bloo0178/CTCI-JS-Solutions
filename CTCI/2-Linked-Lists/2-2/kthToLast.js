/*

# Instructions
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
Hints:#8, #25, #41, #67, #126

# Questions: 
- What are the inputs? List and k?
- Return the element/ value or the entire node?
- What should we return if the list length is less than k? Return false?
- Can we assume that the list will always be non-null?

*/

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