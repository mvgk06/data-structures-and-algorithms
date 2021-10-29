/* 

Problem

https://leetcode.com/problems/middle-of-the-linked-list/

Approach

1. Count the nodes
- Count the total number of nodes in the linked list.
- Return the middle node.

Time - O(n)
Space - O(1)

2. Slow and fast pointers
- Initialize the slow and fast pointer as head.
- Move the slow pointer by 1 node and fast pointer by 2 nodes.
- Return the slow pointer which is the middle node.

Time - O(n)
Space - O(1)

n - size of the linked list

*/

/* Count the nodes */

const middleNode = function (head) {
	let curr = head,
		count = 0;
	while (curr != null) {
		count += 1;
		curr = curr.next;
	}
	let midIndex = Math.floor(count / 2);
	(curr = head), (count = 0);
	while (curr != null && count < midIndex) {
		count += 1;
		curr = curr.next;
	}
	return curr;
};

/* Slow and fast pointers */

const middleNode2 = function (head) {
	let slow = head,
		fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};
