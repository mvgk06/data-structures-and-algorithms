/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/dynamic-stack-official/ojquestion

Approach

Push
- Store the value at the top, increment the top and size.

Pop
- If the top is equal to 0, then print stack underflow.
- Else decrement the top, size and return the popped element.

Top 
- If the top is equal to 0, then print stack underflow.
- Else return the top of the stack.

Size
- Return the size of the stack.

Display
- Traverse from the top of the stack and print the elements.

Time - O(1)
Space - O(n)

n - number of elements

*/

class Stack {
	constructor() {
		this.arr = [];
		this.top = 0;
		this.size = 0;
	}
	push(value) {
		this.arr[this.top] = value;
		this.top++;
		this.size++;
	}
	pop() {
		if (this.top === 0) {
			console.log('Stack underflow');
		} else {
			const poppedElement = this.arr[this.top - 1];
			this.top--;
			this.size--;
			return poppedElement;
		}
	}
	getTop() {
		if (this.top === 0) {
			console.log('Stack underflow');
		} else {
			return this.arr[this.top - 1];
		}
	}
	getSize() {
		return this.size;
	}
	display() {
		for (let i = this.top - 1; i >= 0; i--) {
			process.stdout.write(`${this.arr[i]} `);
		}
		process.stdout.write('\n');
	}
}
