/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/add-last-linked-list-official/ojquestion

Approach
- Create a new node with the given value.
- If the size is 0, then make the head and tail point to the current node.
- Else set the next of tail as the current node and make the tail point to the current node.
- Increment the size.
- Print the list, size and the value of the tail.

Time - O(1)
Space - O(1)

*/

const LinkedList = require('../../../data-structures/linked-list-node');

const solve = (head, tail, size, value) => {
	const node = new LinkedList(value);
	if (size === 0) {
		head = node;
		tail = node;
	} else {
		tail.next = node;
		tail = node;
	}
	size++;
	if (size === 0) {
		console.log(0);
		return;
	}
	let curr = head;
	while (curr !== null) {
		console.log(curr.value);
		curr = curr.next;
	}
	console.log(size);
	console.log(tail.value);
};
