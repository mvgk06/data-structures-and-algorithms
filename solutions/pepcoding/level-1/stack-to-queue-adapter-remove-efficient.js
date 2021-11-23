/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/stack-to-queue-adapter-remove-efficient-official/ojquestion

Approach

Add
- Pop all the elements from the main stack and push them into the helper stack.
- Push the given value into the main stack.
- Pop all the elements from the helper stack and push them back into the main stack.

Remove
- If the size of the main stack is 0, then print queue underflow and return.
- ELse pop the element from the main stack and return it.

Peek
- If the size of the main stack is 0, then print queue underflow and return.
- Else return the top of the main stack.

Size
- Return the size of the main stack.

Time - O(n)
Space - O(n)

n - number of elements

*/

class Queue {
	constructor() {
		this.mainStack = [];
		this.helperStack = [];
	}
	add(value) {
		while (this.mainStack.length > 0) {
			this.helperStack.push(this.mainStack.pop());
		}
		this.mainStack.push(value);
		while (this.helperStack.length > 0) {
			this.mainStack.push(this.helperStack.pop());
		}
	}
	remove() {
		if (this.mainStack.length === 0) {
			console.log('Queue underflow');
			return;
		}
		return this.mainStack.pop();
	}
	peek() {
		if (this.mainStack.length === 0) {
			console.log('Queue underflow');
			return;
		}
		return this.mainStack[this.mainStack.length - 1];
	}
	getSize() {
		return this.mainStack.length;
	}
}
