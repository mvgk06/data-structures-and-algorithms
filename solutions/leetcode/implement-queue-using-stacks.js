/*

Problem

https://leetcode.com/problems/implement-queue-using-stacks/

Approach

1. Push Efficient

Push
- Push the given value into the main stack.

Pop
- Pop all the elements from the main stack and push them into the helper stack except for the last element.
- Pop the last element from the main stack and store it.
- Pop all the elements from the helper stack and push them back into the main stack.
- Return the popped element.

Peek
- Pop all the elements from the main stack and push them into the helper stack except for the last element.
- Pop the last element from the main stack, store it, and push it back into the main stack.
- Pop all the elements from the helper stack and push them back into the main stack.
- Return the peek element.

Empty
- If the size of the main stack is equal to 0, then return true.
- Else, return false.

Time - O(n)
Space - O(n)

2. Pop Efficient

Push
- Pop all the elements from the main stack and push them into the helper stack.
- Push the given value into the main stack.
- Pop all the elements from the helper stack and push them back into the main stack.

Pop
- Pop the element from the main stack and return it.

Peek
- Return the top of the main stack.

Empty
- If the size of the main stack is equal to 0, then return true.
- Else, return false.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Push Efficient */

class MyQueue {
	constructor() {
		this.mainStack = [];
		this.helperStack = [];
	}
	push(value) {
		this.mainStack.push(value);
	}
	pop() {
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
	empty() {
		return this.mainStack.length === 0;
	}
}

/* Pop Efficient */

class MyQueue2 {
	constructor() {
		this.mainStack = [];
		this.helperStack = [];
	}
	push(value) {
		while (this.mainStack.length > 0) {
			this.helperStack.push(this.mainStack.pop());
		}
		this.mainStack.push(value);
		while (this.helperStack.length > 0) {
			this.mainStack.push(this.helperStack.pop());
		}
	}
	pop() {
		return this.mainStack.pop();
	}
	peek() {
		return this.mainStack[this.mainStack.length - 1];
	}
	empty() {
		return this.mainStack.length === 0;
	}
}
