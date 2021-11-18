/*

Problem

https://leetcode.com/problems/min-stack/

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
		this.currTop = null;
		this.size = 0;
	}
	push(value) {
		if (this.currTop === null) {
			const node = new StackNode(value, value);
			this.currTop = node;
		} else {
			const node = new StackNode(value, Math.min(value, this.currTop.min), this.currTop);
			this.currTop = node;
		}
		this.size++;
	}
	pop() {
		if (this.currTop === null) {
			return null;
		}
		const poppedElement = this.currTop.value;
		this.currTop = this.currTop.next;
		this.size--;
		return poppedElement;
	}
	top() {
		if (this.currTop === null) {
			return null;
		}
		return this.currTop.value;
	}
	getMin() {
		if (this.currTop === null) {
			return null;
		}
		return this.currTop.min;
	}
}
