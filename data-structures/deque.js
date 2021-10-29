const DoublyLinkedListNode = require('./doubly-linked-list-node');

class Deque {
	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}
	push(value) {
		const element = new DoublyLinkedListNode(value);
		if (this.size === 0) {
			this.front = element;
			this.rear = element;
		} else {
			this.rear.next = element;
			element.prev = this.rear;
			this.rear = element;
		}
		this.size++;
	}
	pop() {
		if (this.size !== 0) {
			this.rear = this.rear.prev;
			if (this.rear) {
				this.rear.next = null;
			}
			this.size--;
		}
	}
	enque(value) {
		const element = new DoublyLinkedListNode(value);
		if (this.size === 0) {
			this.front = element;
			this.rear = element;
		} else {
			element.next = this.front;
			this.front.prev = element;
			this.front = element;
		}
		this.size++;
	}
	deque() {
		if (this.size !== 0) {
			this.front = this.front.next;
			if (this.front) {
				this.front.prev = null;
			}
			this.size--;
		}
	}
	getFront() {
		return this.front ? this.front.value : null;
	}
	getRear() {
		return this.rear ? this.rear.value : null;
	}
	getSize() {
		return this.size;
	}
}

module.exports = Deque;
