/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/minimum-stack-i-official/ojquestion

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

Min
- If the top is equal to 0, then print stack underflow.
- Else traverse the stack and return the minimum element.

Display
- Traverse from the top of the stack and print the elements.

Time - O(n)
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
	getMin() {
		if (this.top === 0) {
			console.log('Stack underflow');
		} else {
			let min = Number.MAX_VALUE;
			for (let i = this.top - 1; i >= 0; i--) {
				if (this.arr[i] < min) {
					min = this.arr[i];
				}
			}
			return min;
		}
	}
	display() {
		for (let i = this.top - 1; i >= 0; i--) {
			process.stdout.write(`${this.arr[i]} `);
		}
		process.stdout.write('\n');
	}
}
