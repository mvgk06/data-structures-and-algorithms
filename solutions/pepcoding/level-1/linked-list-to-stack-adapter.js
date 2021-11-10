/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/linkedlist-to-stack-adapter-official/ojquestion

Approach

Push
    - Create a new node with the given value.
    - If the top is null, then make the top point to the current node.
    - Else set the next of the current node as top and make the top point to the current node.
    - Increment the size.
Pop
    - If the top is null, then print stack underflow.
    - Else move the top by a node and decrement the size.
Top
    - If the top is null, then print stack underflow.
    - Else print the value of the top node.
Size
    - Print the size. 

Time - O(1)
Space - O(1)

*/

const LinkedListNode = require('../../../data-structures/linked-list-node');

class LinkedListToStackAdapter {
	constructor() {
		this.size = 0;
		this.top = null;
	}
	push(value) {
		const node = new LinkedListNode(value);
		if (this.top === null) {
			this.top = node;
		} else {
			node.next = this.top;
			this.top = node;
		}
		this.size++;
	}
	pop() {
		if (this.top === null) {
			console.log('Stack underflow');
		} else {
			this.top = this.top.next;
			this.size--;
		}
	}
	printTop() {
		if (this.top === null) {
			console.log('Stack underflow');
		} else {
			console.log(this.top.value);
		}
	}
	printSize() {
		console.log(this.size);
	}
}
