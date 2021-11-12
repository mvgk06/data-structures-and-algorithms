/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/kth-from-last-official/ojquestion

Approach

1. Count nodes
- Traverse and get the size of the linked list.
- Compute the result index using size, k and print the node at the result index.

Time - O(n)
Space - O(1)

2. Two pointers
- Use two pointers slow, fast.
- Make the slow point to the head and fast to the node that is k distance away from the head.
- Move both slow, fast one node at a time till the fast reaches the last node.
- Print the value of the node that slow is pointing to.

Time - O(n)
Space - O(1)

n - number of nodes

*/

/* Count nodes */

const solve = (head, k) => {
	if (head === null) {
		return;
	}
	let size = 1,
		curr = head;
	while (curr !== null) {
		curr = curr.next;
		size++;
	}
	let resultIndex = size - 1 - k,
		currIndex = 0;
	curr = head;
	while (curr !== null) {
		if (currIndex === resultIndex) {
			console.log(curr.value);
			break;
		}
		curr = curr.next;
		currIndex++;
	}
};

/* Two pointers */

const solve2 = (head, k) => {
	if (head === null) {
		return;
	}
	let index = 0,
		curr = head;
	while (curr !== null) {
		if (index === k) {
			break;
		}
		curr = curr.next;
		index++;
	}
	if (curr.next === null) {
		console.log(head.value);
	} else {
		let slow = head,
			fast = curr;
		while (fast.next !== null) {
			slow = slow.next;
			fast = fast.next;
		}
		console.log(slow.value);
	}
};
