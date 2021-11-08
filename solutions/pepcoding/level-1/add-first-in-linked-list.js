/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/add-first-in-linked-list-official/ojquestion

Approach
- Create a new node with the given value.
- If head is equal to null, then make the head and tail point to the current node.
- Else set the next of the current node as head and make the head point to the current node.
- Increment the size.

Time - O(1)
Space - O(1)

*/

const LinkedListNode = require('../../../data-structures/linked-list-node');

const solve = (head, tail, size, value) => {
	const node = new LinkedListNode(value);
	if (head === null) {
		head = node;
		tail = node;
	} else {
		node.next = head;
		head = node;
	}
	size++;
};
