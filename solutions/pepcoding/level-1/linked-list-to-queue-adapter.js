/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/linked-list-to-queue-adapter-official/ojquestion

Approach

Add
    - Create a new node with the given value.
    - If the rear is null, then make the front and the rear point to the current node.
    - Else set the next of the rear as current node and make the rear point to the current node.
    - Increment the size.
Remove
    - If the front is null, then print queue underflow.
    - Else move the front by a node and decrement the size.
Peek
    - If the front is null, then print queue underflow.
    - Else print the value of the front node.
Size
    - Print the size.

Time - O(1)
Space - O(1)

*/

const LinkedListNode = require('../../../data-structures/linked-list-node');

class LinkedListToQueueAdapter {
	constructor() {
		this.size = 0;
		this.front = null;
		this.rear = null;
	}
	add(value) {
		const node = new LinkedListNode(value);
		if (this.rear === null) {
			this.front = node;
			this.rear = node;
		} else {
			this.rear.next = node;
			this.rear = node;
		}
		this.size++;
	}
	remove() {
		if (this.front === null) {
			console.log('Queue underflow');
		} else {
			this.front = this.front.next;
			size--;
		}
	}
	peek() {
		if (this.front === null) {
			console.log('Queue underflow');
		} else {
			console.log(this.front.value);
		}
	}
	printSize() {
		console.log(this.size);
	}
}
