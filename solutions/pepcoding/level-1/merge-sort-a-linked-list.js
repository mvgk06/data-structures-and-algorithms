/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/mergesort-linkedlist-official/ojquestion

Approach
- Find the mid of the list based on the current head and tail.
- Recursively sort the left and right half of the list.
- Merge the left and the right list and return the merged head.
- If the head is equal to tail, then return a new node with the value of head.
- Print the sorted and the original linked list.

Time - O(n*log(n))
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

const merge = (leftHead, rightHead) => {
	let left = leftHead,
		right = rightHead,
		mergedHead = null,
		mergedTail = null;
	while (left !== null && right !== null) {
		if (left.value < right.value) {
			const node = new LinkedListNode(left.value);
			if (mergedHead === null) {
				mergedHead = node;
				mergedTail = node;
			} else {
				mergedTail.next = node;
				mergedTail = node;
			}
			left = left.next;
		} else {
			const node = new LinkedListNode(right.value);
			if (mergedHead === null) {
				mergedHead = node;
				mergedTail = node;
			} else {
				mergedTail.next = node;
				mergedTail = node;
			}
			right = right.next;
		}
	}
	while (left !== null) {
		const node = new LinkedListNode(left.value);
		if (mergedHead === null) {
			mergedHead = node;
			mergedTail = node;
		} else {
			mergedTail.next = node;
			mergedTail = node;
		}
		left = left.next;
	}
	while (right !== null) {
		const node = new LinkedListNode(right.value);
		if (mergedHead === null) {
			mergedHead = node;
			mergedTail = node;
		} else {
			mergedTail.next = node;
			mergedTail = node;
		}
		right = right.next;
	}
	return mergedHead;
};

const getMid = (head, tail) => {
	if (head === tail) {
		return;
	}
	let slow = head,
		fast = head.next;
	while (fast !== tail && fast.next !== tail) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

const mergeSort = (head, tail) => {
	if (head === tail) {
		return new LinkedListNode(head.value);
	}
	const mid = getMid(head, tail);
	const leftHead = mergeSort(head, mid);
	const rightHead = mergeSort(mid.next, tail);
	return merge(leftHead, rightHead);
};

const solve = (head, tail) => {
	if (head === null) {
		return null;
	}
	const mergedHead = mergeSort(head, tail);
	printList(mergedHead);
	printList(head);
};
