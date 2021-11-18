/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/min-stack-ii-official/ojquestion

Approach

Push
- If the top is null, create a node with the given value, set the minimum as current value and make the top point to the current node.
- Else create a node with the given value, set the minimum be comparing the previous minimum, set the next of current node as top and make the 
top point to the current node.
- Increment the size.

Pop
- If the top is null, then print stack underflow.
- Else move the top pointer to the next node, decrement the size and return the popped element.

Top 
- If the top is null, then print stack underflow.
- Else return the top of the stack.

Size
- Return the size of the stack.

Min
- If the top is null, then print stack underflow.
- Else return the minimum element.

Display
- Traverse from the top of the stack and print the elements.

Time - O(1)
Space - O(n)

n - number of elements

*/

class StackNode {
	constructor(value, min = Number.MAX_VALUE, next = null) {
		this.value = value;
		this.min = min;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.size = 0;
	}
	push(value) {
		if (this.top === null) {
			const node = new StackNode(value, value);
			this.top = node;
		} else {
			const node = new StackNode(value, Math.min(value, this.top.min), this.top);
			this.top = node;
		}
		this.size++;
	}
	pop() {
		if (this.top === null) {
			console.log('Stack underflow');
		} else {
			const poppedElement = this.top.value;
			this.top = this.top.next;
			this.size--;
			return poppedElement;
		}
	}
	getTop() {
		if (this.top === null) {
			console.log('Stack underflow');
		} else {
			return this.top.value;
		}
	}
	getSize() {
		return this.size;
	}
	getMin() {
		if (this.top === null) {
			console.log('Stack underflow');
		} else {
			return this.top.min;
		}
	}
	display() {
		let curr = this.top;
		while (curr !== null) {
			process.stdout.write(`${this.top.value} `);
			curr = curr.next;
		}
		process.stdout.write('\n');
	}
}
