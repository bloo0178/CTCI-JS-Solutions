"use strict";
const Node = require("../../../data-structures/listNode");
const printLinkedList = require('../../../utils/printLinkedList');

/*

Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
Output: 2 -> 1 -> 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
Output: 9 - > 1 -> 2. That is, 912.
Hints: #7, #30, #71, #95, #109

*/

function sumLists(node1, node2) {
  let node1Num = parseInt(convertListToRevArray(node1).join(""));
  let node2Num = parseInt(convertListToRevArray(node2).join(""));
  let sum = node1Num + node2Num;

  let res = convertIntToRevList(sum);

  return res;
}

// Takes in a node and returns the ints in reverse order in array
function convertListToRevArray(node) {
  let res = [];
  while (node) {
    res.unshift(node.val);
    node = node.next;
  }
  return res;
}

// Takes in an int and returns as a list in reverse order
function convertIntToRevList(num) {
  let res, head;
  let numString = num + "";
  for (let i = numString.length - 1; i >= 0; i--) {
      if (res == null) {
          res = new Node(numString[i]);
          head = res;
      } else {
          res.next = new Node(numString[i]);
          res = res.next;
      }
  }
  return head;
}

let test1 = new Node(1);
test1.add(2);

console.log(printLinkedList(sumLists(test1, test1)));

module.exports = sumLists;
