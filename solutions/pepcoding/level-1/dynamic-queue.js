/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/dynamic-queue-official/ojquestion

Approach

Add
- Create a node with the given value.
- If the size is equal to 0, then make the front and rear point to the current node.
- Else set the next, previous pointer of both rear, current node and make the rear point to the current node.
- Increment the size.

Remove
- If the size is equal to 0, then print queue underflow.
- Else move the front pointer, set its previous pointer, decrement the size and return the removed element.

Peek
- If the size is equal to 0, then print queue underflow.
- Else return the front.

Size
- Return the size of the queue.

Display
- Traverse the queue from the front and print the elements.

Time - O(1)
Space - O(n)

n - number of elements

*/

class QueueNode {
	constructor(value, next = null, prev = null) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}
	add(value) {
		const node = new QueueNode(value);
		if (this.size === 0) {
			this.front = node;
			this.rear = node;
		} else {
			this.rear.next = node;
			node.prev = this.rear;
			this.rear = node;
		}
		this.size++;
	}
	remove() {
		if (this.size === 0) {
			console.log('Queue underflow');
		} else {
			const removedElement = this.front.value;
			this.front = this.front.next;
			if (this.front) {
				this.front.prev = null;
			}
			this.size--;
			return removedElement;
		}
	}
	peek() {
		if (this.size === 0) {
			console.log('Queue underflow');
		} else {
			return this.front.value;
		}
	}
	getSize() {
		return this.size;
	}
	display() {
		let curr = this.front;
		while (curr !== null) {
			process.stdout.write(`${curr.value} `);
			curr = curr.next;
		}
		process.stdout.write('\n');
	}
}
