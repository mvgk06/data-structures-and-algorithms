/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/two-stacks-official/ojquestion

Approach
- Divide the array into two parts representing the two stacks.
- Use two pointers top1, top2 to perform the operations on both the stacks.

Time - O(1)
Space - O(n)

n - number of elements

*/

class Stack {
	constructor(n) {
		this.arr = new Array(n).fill(0);
		this.top1 = 0;
		this.top2 = n - 1;
		this.size1 = 0;
		this.size2 = 0;
		this.limit1 = Math.floor(n / 2);
		this.limit2 = n - this.limit1;
	}
	push1(value) {
		if (this.size1 === this.limit1) {
			console.log('Stack overflow');
		} else {
			this.arr[this.top1] = value;
			this.top1++;
			this.size1++;
		}
	}
	push2(value) {
		if (this.size2 === this.limit2) {
			console.log('Stack overflow');
		} else {
			this.arr[this.top2] = value;
			this.top2--;
			this.size2++;
		}
	}
	pop1() {
		if (this.size1 === 0) {
			console.log('Stack underflow');
		} else {
			const poppedElement = this.arr[this.top1 - 1];
			this.top1--;
			this.size1--;
			return poppedElement;
		}
	}
	pop2() {
		if (this.size2 === 0) {
			console.log('Stack underflow');
		} else {
			const poppedElement = this.arr[this.top2 + 1];
			this.top2++;
			this.size2--;
			return poppedElement;
		}
	}
	getTop1() {
		if (this.size1 === 0) {
			console.log('Stack underflow');
		} else {
			return this.arr[this.top1 - 1];
		}
	}
	getTop2() {
		if (this.size2 === 0) {
			console.log('Stack underflow');
		} else {
			return this.arr[this.top2 + 1];
		}
	}
	getSize1() {
		return this.size1;
	}
	getSize2() {
		return this.size2;
	}
}
