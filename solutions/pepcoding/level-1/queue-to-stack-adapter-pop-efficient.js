/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/queue-to-stack-adapter-pop-efficient/ojquestion

Approach

Push
- Remove all the elements from the queue and add them to a helper queue.
- Add the current value to the queue.
- Remove all the elements from the helper queue and add them back to the queue.

Pop
- Remove the front from the queue and return it.

Top 
- Return the value of the front node.

Size
- Return the size of the queue.

Time - O(n)
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

class Stack {
	constructor() {
		this.queue = new Queue();
	}
	push(value) {
		const helperQueue = new Queue();
		while (this.queue.getSize() > 0) {
			const removedElement = this.queue.remove();
			if (removedElement) {
				helperQueue.add(removedElement);
			}
		}
		this.queue.add(value);
		while (helperQueue.getSize() > 0) {
			this.queue.add(helperQueue.remove());
		}
	}
	pop() {
		return this.queue.remove();
	}
	getTop() {
		return this.queue.peek();
	}
	getSize() {
		return this.queue.getSize();
	}
}
