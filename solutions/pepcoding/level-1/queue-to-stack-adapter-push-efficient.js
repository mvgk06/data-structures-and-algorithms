/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/queue-to-stack-adapter-push-efficient-official/ojquestion

Approach

Push
- Add the given value to the queue.

Pop
- Add null to the queue to mark the end.
- Remove all the elements and add them back to the queue except for the last element.
- Return the last element.

Top 
- Add null to the queue to mark the end.
- Remove all the elements and add them back to the queue.
- Return the last element.

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
		this.queue.add(value);
	}
	pop() {
		let removedElement;
		this.queue.add(null);
		while (true) {
			const front = this.queue.remove();
			if (!front) {
				console.log('Stack underflow');
				break;
			}
			if (this.queue.peek() === null) {
				removedElement = front;
				this.queue.remove();
				break;
			} else {
				this.queue.add(front);
			}
		}
		return removedElement;
	}
	getTop() {
		let topElement;
		this.queue.add(null);
		while (true) {
			const front = this.queue.remove();
			if (!front) {
				console.log('Stack underflow');
				break;
			}
			if (this.queue.peek() === null) {
				topElement = front;
				this.queue.remove();
				this.queue.add(front);
				break;
			} else {
				this.queue.add(front);
			}
		}
		return topElement;
	}
	getSize() {
		return this.queue.getSize();
	}
}
