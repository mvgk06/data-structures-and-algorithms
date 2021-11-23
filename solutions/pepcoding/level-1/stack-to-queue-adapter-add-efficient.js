/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/stack-to-queue-adapter-add-efficient-official/ojquestion

Approach

Add
- Push the given value into the main stack.

Remove
- If the size of the main stack is 0, then print queue underflow and return.
- Else pop all the elements from the main stack and push them into the helper stack except for the last element.
- Pop the last element from the main stack and store it.
- Pop all the elements from the helper stack and push them back into the main stack.
- Return the popped element.

Peek
- If the size of the main stack is 0, then print queue underflow and return.
- Else pop all the elements from the main stack and push them into the helper stack except for the last element.
- Pop the last element from the main stack, store it, and push it back into the main stack.
- Pop all the elements from the helper stack and push them back into the main stack.
- Return the peek element.

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
		this.mainStack.push(value);
	}
	remove() {
		if (this.mainStack.length === 0) {
			console.log('Queue underflow');
			return;
		}
		while (this.mainStack.length > 1) {
			this.helperStack.push(this.mainStack.pop());
		}
		const removedElement = this.mainStack.pop();
		while (this.helperStack.length > 0) {
			this.mainStack.push(this.helperStack.pop());
		}
		return removedElement;
	}
	peek() {
		if (this.mainStack.length === 0) {
			console.log('Queue underflow');
			return;
		}
		while (this.mainStack.length > 1) {
			this.helperStack.push(this.mainStack.pop());
		}
		const peekElement = this.mainStack.pop();
		this.mainStack.push(peekElement);
		while (this.helperStack.length > 0) {
			this.mainStack.push(this.helperStack.pop());
		}
		return peekElement;
	}
	getSize() {
		return this.mainStack.length;
	}
}
