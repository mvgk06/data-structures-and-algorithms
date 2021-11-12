/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/merge-two-sorted-linked-lists-official/ojquestion

Approach
- Use two pointers left, right.
- Make the left and right point to the head of the two sorted lists.
- Compare the values of the left and right pointer and create a merge of the two lists.
- Print all the three lists.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const printList = (head) => {
	let curr = head;
	while (curr !== null) {
		process.stdout.write(`${curr.value} `);
		curr = curr.next;
	}
	process.stdout.write('\n');
};

const solve = (h1, h2) => {
	let left = h1,
		right = h2,
		head = null,
		tail = null;
	while (left !== null && right !== null) {
		if (left.value < right.value) {
			const node = new LinkedListNode(left.value);
			if (head === null) {
				head = node;
				tail = node;
			} else {
				tail.next = node;
				tail = node;
			}
			left = left.next;
		} else {
			const node = new LinkedListNode(right.value);
			if (head === null) {
				head = node;
				tail = node;
			} else {
				tail.next = node;
				tail = node;
			}
			right = right.next;
		}
	}
	while (left !== null) {
		const node = new LinkedListNode(left.value);
		if (head === null) {
			head = node;
			tail = node;
		} else {
			tail.next = node;
			tail = node;
		}
		left = left.next;
	}
	while (right !== null) {
		const node = new LinkedListNode(right.value);
		if (head === null) {
			head = node;
			tail = node;
		} else {
			tail.next = node;
			tail = node;
		}
		right = right.next;
	}
	printList(head);
	printList(h1);
	printList(h2);
};
