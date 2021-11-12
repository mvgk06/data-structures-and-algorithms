/* 

Problem

https://leetcode.com/problems/middle-of-the-linked-list/

Approach

1. Count nodes
- Count the total number of nodes.
- Get the index of the middle node using the count of nodes.
- Return the middle node.

Time - O(n)
Space - O(1)

2. Two pointers
- Use two pointers slow, fast.
- Make the slow and fast point to the head.
- Move the slow pointer by 1 node and fast pointer by 2 nodes.
- Return the slow pointer which is the middle node.

Time - O(n)
Space - O(1)

n - number of nodes

*/

/* Count nodes */

const middleNode = function (head) {
	if (head === null) {
		return;
	}
	let size = 0,
		curr = head;
	while (curr !== null) {
		curr = curr.next;
		size++;
	}
	let midIndex = Math.floor(size / 2),
		currIndex = 0;
	curr = head;
	while (curr !== null) {
		if (currIndex === midIndex) {
			return curr;
		}
		curr = curr.next;
		currIndex++;
	}
};

/* Two pointers */

const middleNode2 = function (head) {
	let slow = head,
		fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};
