/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/normal-queue-official/ojquestion

Approach

Add
- If the size is equal to the length of the array, then print queue overflow.
- Else add the value to the rear, increment the rear circularly and increment the size.

Remove
- If the size is equal to 0, then print queue underflow.
- Else increment the front circularly, decrement the size and return the removed element.

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

class Queue {
	constructor(size) {
		this.arr = new Array(size);
		this.front = 0;
		this.rear = 0;
		this.size = 0;
	}
	add(value) {
		if (this.size === this.arr.length) {
			console.log('Queue overflow');
		} else {
			this.arr[this.rear] = value;
			this.rear = (this.rear + 1) % this.arr.length;
			this.size++;
		}
	}
	remove() {
		if (this.size === 0) {
			console.log('Queue underflow');
		} else {
			const removedElement = this.arr[this.front];
			this.front = (this.front + 1) % this.arr.length;
			this.size--;
			return removedElement;
		}
	}
	peek() {
		if (this.size === 0) {
			console.log('Queue underflow');
		} else {
			return this.arr[this.front];
		}
	}
	getSize() {
		return this.size;
	}
	display() {
		let i = this.front,
			count = 0;
		while (count !== this.size) {
			process.stdout.write(`${this.arr[i]} `);
			count++;
			i = (i + 1) % this.arr.length;
		}
		process.stdout.write('\n');
	}
}
