/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/fold-linkedlist-official/ojquestion

Approach
- Get the middle of the list.
- Reverse the second half of the list.
- Use two pointers left, right to merge the two halves of the list.
- Print the updated list.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const printList = (head) => {
	let curr = head;
	while (curr !== null) {
		process.stdout.write(`${curr.value} `);
		curr = curr.next;
	}
};

const getMid = (head) => {
	if (head === null) {
		return;
	}
	let slow = head,
		fast = head.next;
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

const reverse = (head) => {
	let prev = null,
		curr = head;
	while (curr !== null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};

const solve = (head) => {
	const mid = getMid(head);
	let left = head,
		right = reverse(mid);
	while (left !== null && right !== null && left !== right) {
		const nextLeft = left.next;
		left.next = right;
		left = nextLeft;
		if (left === right) {
			return head;
		}
		const nextRight = right.next;
		right.next = left;
		right = nextRight;
	}
	printList(head);
};
