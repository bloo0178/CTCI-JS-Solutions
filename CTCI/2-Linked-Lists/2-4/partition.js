const Node = require("../../../data-structures/listNode");

/*

Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input:
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
Output:
3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
Hints: #3, #24

*/

function partition(node, partition) {
  let list1 = new Node(null);
  let list2 = new Node(null);
  let p1 = list1;

  while (node) {
    if (node.val < partition) {
      if (list1.val === null) {
        list1.val = node.val;
        p1 = list1;
      } else {
        list1.add(node.val);
        p1 = p1.next;
      }
    } else if (node.val >= partition) {
      if (list2.val === null) {
        list2.val = node.val;
      } else {
        list2.add(node.val);
      }
    }
    node = node.next;
  }

  p1.next = new Node(partition);
  p1.next.next = list2;

  return list1;
}

module.exports = partition;
